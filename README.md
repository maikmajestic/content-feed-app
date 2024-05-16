# Content Feed App

## Description
This is a Next.js application for displaying content cards fetched from either a mockup data file or an API endpoint.

## API Endpoint and Mockup data
The data.ts module is responsible for fetching content data from either an API endpoint or a local mockup data file. It provides a function fetchContent() that returns a Promise containing the fetched data or an error message.

- API Endpoint Configuration: The module uses the NEXT_PUBLIC_API_ENDPOINT environment variable to determine whether to fetch data from an API endpoint or a mockup data file.
- If the USE_API_ENDPOINT flag is set to 'true', the module fetches data using Axios from the specified API endpoint. Otherwise, it fetches data using the Fetch API from a local mockup data file.
- After fetching the data, the module sorts it based on the priority metadata field in descending order.

## Handling Errors
Any errors that occur during the fetching process or any place of the app are caught and shows a ErrorBoundary component with the error.message specified.

## Installation
1. Clone the repository: `git clone https://github.com/maikmajestic/content-feed-app.git`
2. Navigate to the project directory: `cd content-feed-app`
3. Install dependencies: `npm install`
4. Access the app in your browser at `http://localhost:3000`.

## Usage
### Development
To run the development server:

- To use API endpoint:
npm run dev

- To use mockup Data:
npm run dev-mockup