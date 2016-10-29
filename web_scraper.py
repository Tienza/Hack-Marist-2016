import re
import urllib2
from BeautifulSoup import BeautifulSoup

# Variable Declaration
url = "https://news.google.com/"
file_to_print = "titles.txt"

def get_news():
    news_titles = []
    read_url = urllib2.urlopen(url).read()
    read_url = BeautifulSoup(''.join(read_url))
    read_url = read_url.prettify()

    read_url = re.sub('&#\d+;', '', read_url)
    read_url = re.sub('\'', '', read_url)
    read_url = re.sub(',', '', read_url)
    read_url = re.findall('<span class="titletext">\n(.*)\n', read_url)
    for title in read_url:
        title = title.strip()
        news_titles.append(title)

    #count = 1
    with open(file_to_print, "w") as file:
        for title in news_titles:
            print title
            #count += 1
            file.writelines(title + "\n")

get_news()