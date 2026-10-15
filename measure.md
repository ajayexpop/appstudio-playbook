# See how people use the app

From a live app to numbers you can read, narrow and share.

**The result:** You can read how people used your app in a period: who opened it, what they looked at and which features they used, and you know how each number is counted.

Sources: [After launch](https://ajayexpop.github.io/appbuilder/after/), [Analytics](https://ajayexpop.github.io/appbuilder/after/analytics/), [How the numbers are counted](https://ajayexpop.github.io/appbuilder/after/analytics/how-numbers-are-counted/).

_App Studio Playbook v1.0.0, built from the App Studio guide v1.0.1, checked against App Studio bea65df on 14 Oct 2026. Each step links to the App Studio guide pages it comes from._

## Who does what

- **Your move**: You open Analytics in App Studio, choose what to look at, read the numbers and export them for your team, sponsors or exhibitors.

Sources: [Analytics](https://ajayexpop.github.io/appbuilder/after/analytics/), [How to export a PDF report or CSV files](https://ajayexpop.github.io/appbuilder/after/analytics/export/).

## Before you start, have ready

- Your app live on people's phones: the numbers come from the installed app.
- The event and the days you want to read: one event or all of them, and a period of up to 92 days.
- Who needs the numbers: colleagues open Analytics from their own admin, or you send them a PDF report or CSV files.

Sources: [After launch](https://ajayexpop.github.io/appbuilder/after/), [Analytics](https://ajayexpop.github.io/appbuilder/after/analytics/), [How to narrow the numbers to one event, platform or user type](https://ajayexpop.github.io/appbuilder/after/analytics/narrow/), [How to see how much the app was used in a period](https://ajayexpop.github.io/appbuilder/after/analytics/read-the-period/), [How to keep the view you are looking at](https://ajayexpop.github.io/appbuilder/after/analytics/share-a-view/), [How to export a PDF report or CSV files](https://ajayexpop.github.io/appbuilder/after/analytics/export/).

## Stage 1: Open Analytics

Analytics is in App Studio's sidebar under After launch. Its eight dashboard tabs, from Overview to Tech, share one filter bar, and the filters stay as you switch tabs.

Sources: [How to see how much the app was used in a period](https://ajayexpop.github.io/appbuilder/after/analytics/read-the-period/), [Analytics](https://ajayexpop.github.io/appbuilder/after/analytics/).

### 1. Open your app in App Studio, then Analytics under After launch in the sidebar.

- Who: Your move
- Picture: The Overview tab, ringed, here with 90 days chosen; Whole screen shows Analytics chosen in the sidebar under After launch, a screenshot of App Studio
- Why: Once your app is live, Analytics shows how it is used: who opens it, what they look at, which features they use and how fast it runs.
- Watch out: The numbers come from the installed app, and a phone appears in Devices once it has opened a version of the app built in App Studio.
- Done when: Analytics opens on Overview, with the last 30 days.
- Go deeper: [Analytics](https://ajayexpop.github.io/appbuilder/after/analytics/), [Find your way around](https://ajayexpop.github.io/appbuilder/start/find-your-way/), [How to see how much the app was used in a period](https://ajayexpop.github.io/appbuilder/after/analytics/read-the-period/), [After launch](https://ajayexpop.github.io/appbuilder/after/)

### 2. Under Period, press 7d, 14d, 30d or 90d, and under Event, choose an event or keep All events.

- Who: Your move
- Picture: Event and Period at the top of Analytics, a screenshot of App Studio
- Why: A period is whole days in UTC, today included, and at most 92 days long.
- Watch out: For other dates, press the date button, pick the first and the last day, and press Apply: closing the calendar drops them.
- Watch out: With an event chosen, only what people did while that event was chosen in the app counts.
- Done when: The line beside the date button repeats your dates and the number of days.
- Go deeper: [How to see how much the app was used in a period](https://ajayexpop.github.io/appbuilder/after/analytics/read-the-period/), [How to narrow the numbers to one event, platform or user type](https://ajayexpop.github.io/appbuilder/after/analytics/narrow/), [How the numbers are counted](https://ajayexpop.github.io/appbuilder/after/analytics/how-numbers-are-counted/), [Analytics](https://ajayexpop.github.io/appbuilder/after/analytics/), [Analytics: field reference](https://ajayexpop.github.io/appbuilder/after/analytics/fields/)

### 3. If a tab says “No activity in this period”, press Show the last 90 days or Clear filters when offered.

- Who: Your move
- On screen: **No activity in this period** “Numbers appear here as soon as people use the app. Try a longer period, or fewer filters.”
- Why: A tab shows this only when nothing in it can be drawn.
- Watch out: If neither button shows, choose other dates in the calendar, up to 92 days.
- Watch out: Clear filters drops the event, platform and user type but keeps the period.
- Watch out: Audience and Tech can show cards while other tabs are empty: some of their cards read the phones' own check-ins.
- Done when: The tab is read again with the longer period or without the filters.
- Go deeper: [How to get numbers on a tab that says 'No activity in this period'](https://ajayexpop.github.io/appbuilder/after/analytics/empty-tab/), [Analytics: field reference](https://ajayexpop.github.io/appbuilder/after/analytics/fields/)

## Stage 2: Read the headline numbers

The six Overview tiles each compare the period with the same number of days just before. How to read says what a number means, and Latest activity how fresh it is.

Sources: [Analytics: Overview](https://ajayexpop.github.io/appbuilder/after/analytics/overview/), [How to find out what a number means](https://ajayexpop.github.io/appbuilder/after/analytics/read-a-definition/), [How to check how fresh the numbers are and read them again](https://ajayexpop.github.io/appbuilder/after/analytics/check-freshness/).

### 4. On Overview, read the six tiles against the days just before, then Daily activity below them.

- Who: Your move
- On screen: “Previous period: [value]” “Same as the previous period” “Nothing to compare in the previous period”
- Why: People, Signed in, Devices, Sessions, Avg. session and Screen views are each compared with the same number of days just before: green is better, red is worse.
- Watch out: The days of Daily activity do not add up to the tiles: each day counts its own people.
- Watch out: Someone who used the app before signing in, and then signed in during the same period, counts twice under People: once as the phone and once as the account.
- Watch out: A session with a single action counts as 0 minutes and pulls Avg. session down.
- Done when: You know how each headline number moved against the days just before.
- Go deeper: [Analytics: Overview](https://ajayexpop.github.io/appbuilder/after/analytics/overview/), [How to see how much the app was used in a period](https://ajayexpop.github.io/appbuilder/after/analytics/read-the-period/), [How the numbers are counted](https://ajayexpop.github.io/appbuilder/after/analytics/how-numbers-are-counted/)

### 5. Press How to read at the top right to open the Analytics guide on the part for your tab.

- Who: Your move
- On screen (drawn from App Studio's code): How to read, Export, Refresh
- Why: Each entry is named like the card on screen and says what it shows, how it is counted and which app records it comes from.
- Done when: You read the entry named like the card you are looking at.
- Go deeper: [How to find out what a number means](https://ajayexpop.github.io/appbuilder/after/analytics/read-a-definition/), [How the numbers are counted](https://ajayexpop.github.io/appbuilder/after/analytics/how-numbers-are-counted/), [Analytics: field reference](https://ajayexpop.github.io/appbuilder/after/analytics/fields/)

### 6. Read Latest activity under the heading, and press Refresh to read the open tab again.

- Who: Your move
- Picture: The line under the Analytics heading, here with nothing recorded in the period, a screenshot of App Studio
- Why: Latest activity says when the newest activity under your filters was recorded, from just now to a date once it is 14 days or more, or the line reads “No activity in this period yet”.
- Watch out: Refresh reads only the open tab: another tab keeps the numbers it read for the same filters until you press Refresh there.
- Watch out: The Analytics guide says a phone without a connection keeps its records for up to 30 days, so a period that has just ended can still grow a little.
- Watch out: Data completeness on Tech, measured only with All events, shows the share of the phones' records that has arrived, and says “Some data still on its way” below 99%.
- Done when: You know when the newest activity was recorded, or that none was, and the open tab is read again.
- Go deeper: [How to check how fresh the numbers are and read them again](https://ajayexpop.github.io/appbuilder/after/analytics/check-freshness/), [Analytics: Tech](https://ajayexpop.github.io/appbuilder/after/analytics/tech/)

## Stage 3: See what people did

Audience, Engagement, Content, Networking and Promotion share the filter bar with Overview.

Sources: [Analytics](https://ajayexpop.github.io/appbuilder/after/analytics/).

### 7. Open Audience to see who people are, where they come from and whether they come back.

- Who: Your move
- Picture: New vs returning, ringed at the top of the Audience tab, empty in this period, beside Languages, a screenshot of App Studio
- Why: Install sources shows how each new install first opened the app: from a link, a QR code, the store with no link, or a link the app could not read.
- Watch out: Installs and updates counts an install when the app is first opened, not when it is downloaded from the store.
- Watch out: With one event chosen, new in New vs returning still means new to the app, not to that event.
- Watch out: Where people are places phones by the network they use, so a phone on mobile data or a VPN can be placed in its operator's country.
- Done when: You know where new installs came from and, day by day, how many devices were new or came back.
- Go deeper: [Analytics: Audience](https://ajayexpop.github.io/appbuilder/after/analytics/audience/), [How to see where installs came from](https://ajayexpop.github.io/appbuilder/after/analytics/install-sources/)

### 8. Open Engagement to see when people used the app, the screens and features they used, and their searches.

- Who: Your move
- On screen: “Activity by weekday and hour.” “What people did in the app, and how many of them did it.” “Terms at least three people searched for.”
- Why: Searches flags a term when 25% or more of its searches found nothing.
- Watch out: When people use the app shows each phone's local time, while the period is in UTC days, so its first and last hours can be cut differently.
- Done when: You know which screens and features people used most.
- Go deeper: [Analytics: Engagement](https://ajayexpop.github.io/appbuilder/after/analytics/engagement/), [How the numbers are counted](https://ajayexpop.github.io/appbuilder/after/analytics/how-numbers-are-counted/)

### 9. Open Content for the exhibitors, products, sessions, speakers, brands, documents and videos people looked at.

- Who: Your move
- On screen: “Views per impression in a list”
- Why: Each row of the top table gives views, people, favourites, impressions and CTR; exhibitors add Booth located and Meetings asked, and sessions Added to agenda.
- Watch out: CTR can pass 100%, because a profile can also be opened from search, a link or another profile.
- Watch out: Favourites that were later removed still count in the top table; Favourites shows how many were removed.
- Done when: You know which items people viewed most.
- Go deeper: [Analytics: Content](https://ajayexpop.github.io/appbuilder/after/analytics/content/)

### 10. Open Networking to see the meetings, messages, leads and personal agendas of the period.

- Who: Your move
- On screen: “From the request to the rating.” “Messages sent, chats started and chats people opened to read.” “Badges scanned in the app, and what became of the leads.”
- Why: Meetings follows requests to the meetings accepted and rated, and those declined, cancelled and rescheduled.
- Watch out: Each meeting step counts what happened in the period, not one set of meetings followed through, so accepted can be more than requested.
- Watch out: Meeting attendance shows 0% and “Low attendance” whenever a meeting was accepted, and Contact requests stays empty: the Analytics guide says the app does not offer a meeting check-in or contact requests yet.
- Done when: You know how many meetings were requested and accepted in the period.
- Go deeper: [Analytics: Networking](https://ajayexpop.github.io/appbuilder/after/analytics/networking/)

### 11. Open Promotion to see how sponsor placements, push notifications, links and QR codes reached people.

- Who: Your move
- On screen: “[n] clicks on sponsored places.” “Impressions per place in the app, with the click rate.” “QR codes scanned and downloaded in the app.”
- Why: Sponsors gives the impressions, clicks and CTR of each sponsor in each place its banner was shown.
- Watch out: The Analytics guide says a sponsor impression counts when at least half of the banner was on screen for at least a second, once per screen visit.
- Watch out: The Analytics guide says Received misses pushes that arrived while the app was not on screen unless they were tapped, so the open rate can pass 100%, while Opened is complete.
- Done when: You know how often sponsor banners were seen and clicked, and how many pushes were opened.
- Go deeper: [Analytics: Promotion](https://ajayexpop.github.io/appbuilder/after/analytics/promotion/)

## Stage 4: See how the app ran, and on which phones

Performance and Tech show how fast and how reliably the app worked. Devices lists every phone with your app that has reported in, and works on its own.

Sources: [Analytics: Performance](https://ajayexpop.github.io/appbuilder/after/analytics/performance/), [Analytics: Tech](https://ajayexpop.github.io/appbuilder/after/analytics/tech/), [Analytics: Devices](https://ajayexpop.github.io/appbuilder/after/analytics/devices/).

### 12. Open Performance for speed and server answers, and Tech for versions, phones, permissions and reliability.

- Who: Your move
- On screen: “Cold: from tapping the icon to the first screen people can use. Warm: from coming back to the app to its first frame.” “The typical cold start, with the slowest 5% beside it.” “How the sampled calls to the server were answered.”
- Why: Lower is better everywhere on Performance: Typical is the median, and Slowest 5% the 95th percentile.
- Watch out: Errors people saw on Tech leaves out app crashes; your ExpoPlatform team can see more about the app's health, such as crashes and errors: ask your ExpoPlatform contact.
- Done when: You know how fast the app started and how reliably it worked in the period.
- Go deeper: [Analytics: Performance](https://ajayexpop.github.io/appbuilder/after/analytics/performance/), [Analytics: Tech](https://ajayexpop.github.io/appbuilder/after/analytics/tech/), [Set by your ExpoPlatform team](https://ajayexpop.github.io/appbuilder/help/set-by-team/)

### 13. Open Devices to see the phones with your app, the versions they run and who is signed in on each.

- Who: Your move
- Picture: Installs, last 30 days, ringed among the Devices tab's install figures; Whole screen shows the tab chosen, a screenshot of App Studio
- Why: Versions shows which app versions phones ran over the last 30 days, and Show devices lists the phones on one of them.
- Watch out: The dashboard's filters, Latest activity and Export do not apply here: use the tab's own Search, Platform, App version and Signed in filters.
- Watch out: The list shows personal data: the name and email, or company, of the person signed in on each phone, and a city and country located from its network.
- Done when: You see the install figures and the versions in use.
- Go deeper: [Analytics: Devices](https://ajayexpop.github.io/appbuilder/after/analytics/devices/), [How to see which phones run one app version](https://ajayexpop.github.io/appbuilder/after/analytics/phones-on-a-version/), [How to find the phones of one person](https://ajayexpop.github.io/appbuilder/after/analytics/find-a-person/), [Update your app after launch](https://ajayexpop.github.io/appbuilder/after/updating/)

## Stage 5: Narrow to a slice

Platform and User type read every dashboard tab again for that slice, except a few cards.

Sources: [How to narrow the numbers to one event, platform or user type](https://ajayexpop.github.io/appbuilder/after/analytics/narrow/).

### 14. Under Platform, choose iOS or Android, and under User type, choose Visitor, Exhibitor, Speaker or Guest.

- Who: Your move
- Picture: Platform and User type, under Event, a screenshot of App Studio
- Why: Each choice applies at once: the open tab is read again, then the other tabs, and the filters stay as you switch tabs.
- Watch out: Languages, Where people are, Top cities, Operating systems and Phones ignore the user type, and Data completeness and the people counts in the Event list ignore both.
- Watch out: The Analytics guide says older app versions do not report the user type: their activity drops out as soon as you choose one.
- Watch out: Filters are not saved: a reload of your admin's page in the same browser tab keeps them, but a new browser tab opens your list of apps.
- Done when: The open tab shows that slice, and Reset filters brings back every event, platform and user type and the last 30 days.
- Go deeper: [How to narrow the numbers to one event, platform or user type](https://ajayexpop.github.io/appbuilder/after/analytics/narrow/), [How the numbers are counted](https://ajayexpop.github.io/appbuilder/after/analytics/how-numbers-are-counted/), [How to keep the view you are looking at](https://ajayexpop.github.io/appbuilder/after/analytics/share-a-view/), [Analytics: Tech](https://ajayexpop.github.io/appbuilder/after/analytics/tech/)

## Stage 6: Share the numbers

Export turns the eight dashboard tabs into a PDF report or CSV files, for the filters set at that moment. The Devices tab is never exported.

Sources: [Analytics](https://ajayexpop.github.io/appbuilder/after/analytics/), [How to export a PDF report or CSV files](https://ajayexpop.github.io/appbuilder/after/analytics/export/).

### 15. Press Export, choose a format and the sections, and press Make the PDF or Make the CSV files.

- Who: Your move
- On screen (drawn from App Studio's code): Format (PDF report), Sections to include (ticked), Make the PDF
- Why: App Studio's own words: “Turn what you see into a branded report for your team, sponsors or exhibitors”.
- Watch out: The file uses the filters set when you press Export: set Event, Period, Platform and User type first.
- Watch out: The file can be downloaded for one hour from when it was made.
- Watch out: If the dialog names a section it could not prepare, the file says it is missing: export again to include it.
- Done when: “Your report is ready” shows, and Download PDF or Download ZIP saves the file.
- Go deeper: [How to export a PDF report or CSV files](https://ajayexpop.github.io/appbuilder/after/analytics/export/), [How to keep the view you are looking at](https://ajayexpop.github.io/appbuilder/after/analytics/share-a-view/)

## Something's wrong?

- **A tab says “No activity in this period”.** Why: Nothing in the tab can be drawn for your period and filters. What to do: Press Show the last 90 days or Clear filters when offered; if neither shows, choose other dates in the calendar, up to 92 days. See: [How to get numbers on a tab that says 'No activity in this period'](https://ajayexpop.github.io/appbuilder/after/analytics/empty-tab/).
- **A tab says “These numbers could not be loaded right now” instead of its cards.** Why: The tab could not be read. What to do: Press Try again. See: [How to see how much the app was used in a period](https://ajayexpop.github.io/appbuilder/after/analytics/read-the-period/).
- **People is higher than Signed in and Devices suggest.** Why: Someone who used the app before signing in, and then signed in during the same period, counts once as the phone and once as the account. What to do: Nothing to fix: Signed in counts only accounts, and Devices counts installed copies of the app. See: [Analytics: Overview](https://ajayexpop.github.io/appbuilder/after/analytics/overview/), [How the numbers are counted](https://ajayexpop.github.io/appbuilder/after/analytics/how-numbers-are-counted/).
- **The numbers seem older than they should be.** Why: A tab keeps the numbers it read for the same filters until you press Refresh there, and Latest activity does not move on its own. What to do: Press Refresh on that tab, then read Latest activity again. See: [How to check how fresh the numbers are and read them again](https://ajayexpop.github.io/appbuilder/after/analytics/check-freshness/).
- **The Devices tab ignores your filters.** Why: Devices reads each phone's latest check-in, so the dashboard's filters, Latest activity and Export do not apply to it. What to do: Use its own Search, Platform, App version and Signed in filters. See: [Analytics: Devices](https://ajayexpop.github.io/appbuilder/after/analytics/devices/).
- **Some cards do not change when you choose a user type.** Why: Languages, Where people are, Top cities, Operating systems and Phones ignore the user type, and Data completeness and the people counts in the Event list always cover every user type. What to do: Nothing to fix: How the numbers are counted lists what each filter does not narrow. See: [How to narrow the numbers to one event, platform or user type](https://ajayexpop.github.io/appbuilder/after/analytics/narrow/), [How the numbers are counted](https://ajayexpop.github.io/appbuilder/after/analytics/how-numbers-are-counted/), [Analytics: Tech](https://ajayexpop.github.io/appbuilder/after/analytics/tech/).
- **Export says “The report could not be made. Your data is safe; try again in a minute.”** Why: The export failed, and no file was made. What to do: Press Try again in a minute. See: [How to export a PDF report or CSV files](https://ajayexpop.github.io/appbuilder/after/analytics/export/).
- **A link does not open your view for a colleague.** Why: App Studio opens only inside each person's own ExpoPlatform admin, so a link cannot open the view. What to do: Ask them to open Analytics from their own admin and choose the same tab and filters, or send them an export. See: [How to keep the view you are looking at](https://ajayexpop.github.io/appbuilder/after/analytics/share-a-view/).
- **Export says “This report is no longer kept”.** Why: The file was kept for one hour and is gone. What to do: Press Try again and make the report again. See: [How to export a PDF report or CSV files](https://ajayexpop.github.io/appbuilder/after/analytics/export/).
