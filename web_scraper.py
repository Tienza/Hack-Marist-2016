import re
import urllib2
from BeautifulSoup import BeautifulSoup

# Variable Declaration
url = "https://news.google.com/"
file_to_print = "titles.txt"
file_to_json = "titles.json"
image_to_html = "images.html"

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

    json_content = ""
    count = 0
    with open(file_to_json, "w") as file2:
        for title in news_titles:
            json_content = json_content + '"tile' + str(count) + '": "' + title + '",'
            count += 1
        json_content = '{' + json_content + '}'
        json_content = re.sub('\,}', '}', json_content)

        file2.writelines(json_content)

    print len(news_titles)
def get_image():
    image_source = []

    img_url = urllib2.urlopen(url).read()
    img_url = BeautifulSoup(''.join(img_url))
    img_url = img_url.prettify()

    main_img_url = re.findall('<img\sclass="esc-thumbnail-image"\ssrc="//(.*)"\sstyle=', img_url)
    sub_img_url = re.findall('<img\sclass="esc-thumbnail-image\slate-tbn"\simgsrc="//(.*)"\sstyle="', img_url)

    with open(image_to_html, "w") as file:
        for image in main_img_url:
            #print "<img src='" + image + "'>"
            #count += 1
            file.writelines("<img src='https://" + image + "'>")
        for image in sub_img_url:
            file.writelines("<img src='https://" + image + "'>")

    print main_img_url
    print sub_img_url

    print str(len(main_img_url) + len(sub_img_url))

get_news()
get_image()