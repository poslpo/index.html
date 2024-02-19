# index.html

## Running the HTML File

To run your HTML file locally, you can use a local server. Here are two options:

### Option 1: Python

If you have Python installed, you can use its built-in HTTP server. Follow these steps:

1. Open your terminal and navigate to the directory where your HTML file is located.
2. Run one of the following commands, depending on your Python version:
     - For Python 2.x:
         ```bash
         python -m SimpleHTTPServer
         ```
     - For Python 3.x:
         ```bash
         python -m http.server
         ```
3. Open your web browser and navigate to [http://localhost:8000/index.html](http://localhost:8000/index.html).

### Option 2: Node.js

If you don't have Python installed, you can use Node.js and the http-server package. Follow these steps:

1. Install the http-server package globally by running the following command in your terminal:
     ```bash
     npm install --global http-server
     http-server
     
