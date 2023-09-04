# AI Grading Assistant for Canvas Discussions 🎓📝

This application is designed to automate the grading process of Canvas discussions. It uses advanced AI models to grade student responses based on a provided rubric, and also provides developmental feedback to students. The application is built using Next.js and the Vercel AI SDK, with added Azure Authentication.

## Features 🚀

- **Automated Grading**: The application grades Canvas discussions based on a provided rubric, saving educators valuable time.
- **Developmental Feedback**: In addition to grading, the application provides feedback to students, helping them understand how they can improve.
- **Easy to Use**: Simply provide the URL of the Canvas discussion and your Canvas API Key, and the application will handle the rest.
- **Azure Authentication**: The application is secured with Azure Authentication, ensuring only authorized users can access it.

## How to Use 🛠️

1. **Login**: Use your Azure credentials to login to the application.
2. **Ingest Canvas Discussions**: Enter your Canvas Discussion URL and your Canvas API Key, then click the 'Ingest' button. The application will download the discussion data and prepare it for grading.
3. **Start Grading**: Once the data has been ingested, click the 'Grade' button to start the grading process. The application will grade each student's response based on the provided rubric.
4. **Download Results**: After grading is complete, you can download the results as a CSV file. This file contains the grades for each student, along with the feedback provided by the application.
5. **Ask Questions**: You can ask questions about the grading process or the results. The application uses an AI model to provide answers to your questions.

## Requirements 📋

This application requires the following:

- [Next.js](https://nextjs.org)
- [Vercel AI SDK](https://sdk.vercel.ai/docs)
- [Azure Authentication](https://azure.microsoft.com/en-us/services/active-directory/)

## Running the Application 🏃‍♀️

To run the application, you need to install the dependencies and start the development server:
```bash
pnpm install
pnpm run dev
```

This will launch the application, where you can interact with it on http://localhost:3000.

## Contributing 🤝

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

## License 📄

This project is licensed under the MIT License.
