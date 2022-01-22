# Project Name : yir

### Year in Review (YIR for short).

_The days are long, but the years are short_

## Project Overview

**premise**

- Every new years eve, we sit down as a family and look back on the year that passed. This app is an attempt to recreate the collage of tools we have used so far. We remember the good, the bad and everything we have faced through the year\*

Users can register, and begin to create memories. Memories are stored and kept in order by date. User can CRUD memories.

### Main setup

Project consist of an API and a frontend. Api saves users and memories, and frontend allows users to register, login, and CRUD memories.

_Backend API_
The backend is found in the backend folder. Setup Instructions is found in the ReadMe file inside that folder.

_frontend_
React frontend in the Frontend folder. Setup instructions is found in the ReadMe folder inside the folder.

#### Memories

Memories includes

- date
- Heading
- description
- TODO: link for picture to be included.

#### SCRUM board

(outdated link to trello removed)

#### Credit where Credit is due

The idea for the app is ruthlessly and shamelessly copied from the Chingu project
[Chingu Solo Project - Tier 3 - Journal App] (https://github.com/chingu-voyages/soloproject-tier3-journal-app)
I have only added a very thin veneer of originality, as I have indeed been doing Year in Reviews with my family using a combination of tools...
but why waiste 5 minuttes using sub-par tools, when I can labouriously over-engineer a solution in just ~~a few days~~ a few weeks.

#### Personal notes

_react router dom upgrade_

- New version is released..v6, which does not work with Redirect or protected routes. Why on earth does npm install v6 when the default version is still v5 ? hours waisted wondering why my standard code did not work.
  - More v6. Navigate is substitute for useHistory() but wait...Navigate only works when wrapped in a component OR when inside the router. So basically my default architecture of handling login in my app.js file will not work.

_Dynamic style_
TODO - exclude dynamic style from constantly re-rendering on each input. I am using controlled components, and this causes React to re-render all pictures on each input.

##### Learnings

- Some experience working with Routes in React router dom v6. Very different from v5. Routes - Route and nested children.
- CSS in JS means to really pay attention to data types. style={{style}}
