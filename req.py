import base64
from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route('/get_video')
def get_video():
    url = "https://www.1024tera.com/sharing/link?surl=Fo5hJjrlmcgyUfBXCM6A7g"
    response = requests.get(url)
    
    # Check if the request was successful
    if response.status_code == 200:
        # Base64 encode the video content
        video_content_base64 = base64.b64encode(response.content).decode('utf-8')
        
        # Create a JSON response with the base64 encoded video content
        response_json = {
            "video_content_base64": video_content_base64
        }
        
        # Return the JSON response
        return jsonify(response_json), 200
    else:
        return jsonify({"error": "Failed to retrieve video", "status_code": response.status_code}), response.status_code

if __name__ == '__main__':
    app.run(debug=True)
