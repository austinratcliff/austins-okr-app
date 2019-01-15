# Austin's OKR App — an Intercom Messenger App

### First, what's an OKR?
**OKRs (objectives and key results)** are something that we do at Intercom to focus on our goals within the company and beyond. One of my OKRs during Q3 and Q4 of 2018 was to learn how to use our newly launched [Messenger Framework](https://developers.intercom.com/building-apps/docs/messenger-framework), and with it build my own Messenger App. Each Tuesday for four weeks, I dove into our docs, learned the basics of Express.js, and developed the rough draft version of my app, then presented it all to my fellow CSEs.

### Job to be done
**The use case that I wanted to solve** was one that our customer support team, as well as our customers, face daily. Imagine this —
* A user opens a new conversation with you via Intercom, you give them _amazing_ support, then you close the conversation with a 😍 rating.
* Then... The customer reopens the conversation with a new question. 😱 But you already got a rating for the first question, so how will you get a rating for the second one? Why bother with a second question if you can't get more heart eyes?!
* Let me introduce you to my completely unnamed, but incredibly awesome Messenger App! It allows you to request additional ratings at any time!

![](https://media.giphy.com/media/xUPGcwjREBpiFWPNCw/giphy.gif)

### Version 1.0 aka. what it can do currently
**As I mentioned, this is a rough. 👏 draft. 👏** So it's not functional enough to go live, but here's what it can do —
1. It can be added to your Messenger Home (although, this is not necessarily useful at this time).
2. It can be sent to users, leads, and visitors via your Inbox.
3. When you send it via your Inbox and a person selects a new rating, a note that only you can see will be added to the conversation to let you know what their new rating is, and whether it's better than the initial one or not.

### Version 2.0 aka. what I want it to do eventually
**This started as a basic answer to the question** "How can I make conversations that continue after they're closed and rated be worth our time from a CSAT (customer satisfaction) point of view?" But this app actually could be used for more, like to remedy a negative rating, or to gather various types of feedback via your Messenger Home. My current list of future features include —
1. Making the new rating persist by updating or averaging it with the initial rating (this is currently limited by Intercom's API, as currently it can't be used to update conversation ratings).
2. Making the "Rate your conversation again" text and emojis editable so that you can customize the app for your own feedback needs.
3. Add an input field for additional remarks.