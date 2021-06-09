# Back of the Napkin

https://github.com/kevin-wand/redev-model

## Project Description

- Real Estate Development Model
- Build cash flow components for investment analysis that can store the results of valuations and respond to user input.
- Developed using React, with Airtable for CRUD operations.
- Potential for post-mvp work with user authentication and portfolio management.

## Wireframes

![imageAlt](https://i.imgur.com/gq0tWLi.png)

## Component Hierarchy

![imageAlt](https://i.imgur.com/g2Xa0uV.png)
![imageAlt](https://i.imgur.com/UMf5rUC.png)

## API and Data Sample

[API sample view](https://airtable.com/tblXESHGhEtSdSbOR/viwUzekh3E8Srh0by?blocks=hide)

```
{
    "records": [
        {
            "id": "recMnk6AJxElE0DVR",
            "fields": {
                "Name": "Sample Site",
                "Initial Investment": "1500000",
                "Hold Period": "5",
                "Annual Revenue": "200000",
                "Revenue Growth Rate": "3%",
                "Annual Expenses": "125000",
                "Expense Growth Rate": "3%",
                "Additional Capital": "10000",
                "Closing Costs": "0"
            },
            "createdTime": "2021-06-07T13:39:10.000Z"
        },
        {
            "id": "rec486mASt7j28ux3",
            "fields": {},
            "createdTime": "2021-06-07T13:39:10.000Z"
        },
        {
            "id": "recMaDFFBh5SwrJ1D",
            "fields": {},
            "createdTime": "2021-06-07T13:39:10.000Z"
        }
    ],
    "offset": "recMaDFFBh5SwrJ1D"
}
```

### MVP/PostMVP

#### MVP

- Dynamic time frame and table creation, based on user inputs.
- Store projects for future analysis.
- Edit stored projects.
- Delete stored projects.

#### PostMVP

- Add optionality to provide more lines of detail in components.
- Store results by user.
- Add options for return types (levered/with debt).
- Waterfalls for multi-investor splits.
- Area measurements for per unit kpi.

## Project Schedule

|   Day   | Deliverable                                     | Status  |
| :-----: | :---------------------------------------------- | :------ |
| 1. 6/07 | Project Approval & Pseudocode                   | Pending |
| 2. 6/08 | Airtable set up & CSS Library research complete | Pending |
| 3. 6/09 | MVP Code complete                               | Pending |
| 4. 6/10 | CSS Clean up                                    | Pending |
| 5. 6/11 | Post MVP                                        | Pending |
| 6. 6/12 | Post MVP & Advanced CSS                         | Pending |
| 7. 6/13 | Review and Presentation Prep                    | Pending |
| 8. 6/14 | Presentation                                    | Pending |

## Timeframes

| Components                               | Priority | Estimated Time | Time Invested | Actual Time |
| :--------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Airtable set up                          |    H     |     2.0hrs     |    0.0hrs     |   0.0hrs    |
| Pseudocode                               |    H     |     2.0hrs     |    0.0hrs     |   0.0hrs    |
| React - Home Page and Route/Link         |    H     |     1.5hrs     |    0.0hrs     |   0.0hrs    |
| React - Build Input Form                 |    H     |     2.0hrs     |    0.0hrs     |   0.0hrs    |
| Component - Time Period & Building Table |    H     |     3.0hrs     |    0.0hrs     |   0.0hrs    |
| Component - Revenue                      |    H     |     2.0hrs     |    0.0hrs     |   0.0hrs    |
| Component - Expenses                     |    H     |     2.0hrs     |    0.0hrs     |   0.0hrs    |
| Component - Initial Investment           |    H     |     2.0hrs     |    0.0hrs     |   0.0hrs    |
| Component - Additional Capital           |    H     |     2.0hrs     |    0.0hrs     |   0.0hrs    |
| Component - Closing Costs                |    H     |     2.0hrs     |    0.0hrs     |   0.0hrs    |
| React - Get fields from Airtable         |    H     |     1.5hrs     |    0.0hrs     |   0.0hrs    |
| React - Post new fields to Airtable      |    H     |     1.5hrs     |    0.0hrs     |   0.0hrs    |
| CSS - Potential CSS Library / Research   |    H     |     2.0hrs     |    0.0hrs     |   0.0hrs    |
| CSS - User Input Form                    |    H     |     2.0hrs     |    0.0hrs     |   0.0hrs    |
| CSS - General Layout                     |    H     |     3.0hrs     |    0.0hrs     |   0.0hrs    |
| CSS - Output Table                       |    H     |     3.0hrs     |    0.0hrs     |   0.0hrs    |
| CSS - Displaying Data                    |    H     |     3.0hrs     |    0.0hrs     |   0.0hrs    |
| CSS - Media Responses                    |    H     |     1.0hrs     |    0.0hrs     |   0.0hrs    |
| CSS - Advanced CSS                       |    H     |     3.0hrs     |    0.0hrs     |   0.0hrs    |
| Post MVP - Revenue Detail                |    L     |     3.0hrs     |    0.0hrs     |   0.0hrs    |
| Post MVP - Expenses Detail               |    L     |     3.0hrs     |    0.0hrs     |   0.0hrs    |
| Post MVP - Store Results from User Data  |    L     |     3.0hrs     |    0.0hrs     |   0.0hrs    |
| Post MVP - Additional Projects           |    L     |     3.0hrs     |    0.0hrs     |   0.0hrs    |
| Presentation Prep                        |    L     |     1.5hrs     |    0.0hrs     |   0.0hrs    |
| Total                                    |    --    |    54.0hrs     |    0.0hrs     |   0.0hrs    |

## SWOT Analysis

### Strengths:

Have a clear idea of what I'm looking to do.

### Weaknesses:

General feelings toward CSS.

### Opportunities:

Think this will be a good CV project, combining past experience with what I've learned. Potential to learn and experience coding that will push my comfort level.

### Threats:

Concerned this might be too complex. Have to implement a time period to dynamically create a table, and multiple dependencies on some components.
