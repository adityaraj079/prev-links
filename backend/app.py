from flask import Flask, jsonify
from flask_cors import CORS
import openpyxl
import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse

app = Flask(__name__)
CORS(app)

@app.route('/get_links_with_titles')
def get_links_with_titles():
    links_with_titles = []
    wb = openpyxl.load_workbook('links.xlsx')
    sheet = wb.active
    for row in sheet.iter_rows(values_only=True):
        name, link = row
        title = get_page_title(link)
        if title:
            links_with_titles.append({"name": name, "link": link, "title": title})
        else:
            links_with_titles.append({"name": name, "link": link, "title": ""}) # Return empty string if title is not fetched
    return jsonify(links_with_titles)

def get_page_title(url):
    try:
        parsed_url = urlparse(url)
        if not parsed_url.scheme:
            # If scheme is missing, assume 'http://' as default
            url = 'https://' + url
        response = requests.get(url)
        if response.status_code == 200:
            soup = BeautifulSoup(response.text, 'html.parser')
            # Get the title of the web page
            title_tag = soup.find('title')
            if title_tag:
                return title_tag.string
    except Exception as e:
        print("Error fetching page title:", e)
    return None

if __name__ == '__main__':
    app.run(debug=True)
