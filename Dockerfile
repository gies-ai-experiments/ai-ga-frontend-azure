# STAGE 1: A container with pnpm and python3 is required
FROM node:18-alpine as pnpm_base
WORKDIR /app

# install pnpm
RUN npm i --global --no-update-notifier --no-fund pnpm@8.6.3

# install python3 and other deps
RUN apk add --no-cache g++ make py3-pip libc6-compat


# STAGE 2: fetch deps into the pnpm store
FROM pnpm_base as fetched_deps
WORKDIR /app

# setting production env usually speeds up install for your package manager
ENV NODE_ENV production

# copy the lock file that you use
COPY package.json pnpm-lock.yaml ./

# set the store dir to a folder that is not in the project
RUN pnpm config set store-dir /workdir/.pnpm-store
RUN pnpm fetch

# STAGE 3: Copy the application code and install all deps from cache into the application
FROM fetched_deps as with_all_deps


# Copy the .env.local file
COPY .env.local ./
 

# Copy the whole project code (except for ignored things)
COPY . .

# finally, install all the deps
RUN pnpm i --frozen-lockfile

# STAGE 4: Build the NextJS app
FROM with_all_deps as builder
CMD ["ls", "-la"]
RUN pnpm build
RUN pnpm prune --prod


# STAGE 5: Create a clean production image - only take pruned assets
FROM node:18-alpine AS runner
WORKDIR /app

# We set the NODE_ENV to production to make sure that the NextJS app runs in production mode
ENV NODE_ENV=production

# We add a non-root user to run the app for security reasons
RUN addgroup --system --gid 1001 app
RUN adduser --system --uid 1001 app
USER app

 

# We copy the built NextJS app assets from the builder stage
COPY --chown=app:app --from=builder /app/.next/standalone src/
COPY --chown=app:app --from=builder /app/src/public src/public
COPY --chown=app:app --from=builder /app/.next/static src/.next/static


# Set the port that the NextJS app will run on

# You should choose a port that is supported by your cloud provider
ENV PORT 3000

# Expose the port to the outside world
EXPOSE 3000

# Finally, we run the NextJS app
CMD ["node", "src/server.js"]
