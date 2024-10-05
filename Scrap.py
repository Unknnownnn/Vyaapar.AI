
from groq import Groq

client = Groq(api_key="Your Api key")
completion = client.chat.completions.create(
    model="llama3-70b-8192",
    messages=[
        {
            "role": "user", 
            "content": '''As a professional web scrapper, scrap all the data from thekredible.com about allen company'''
        }
    ],
    temperature=1,
    max_tokens=1024,
    top_p=1,
    stream=True,
    stop=None,
)

with open('output.txt', 'w', encoding='utf-8') as f:
    for chunk in completion:
        f.write(chunk.choices[0].delta.content or "")