# Contributing
Are you a lab member trying to update information on the website? Then this is the section for you!

The majority of the site's content is stored as independent YAML files under the directory
`src/yaml/<data-type>/<record>.yml`, where `data-type` is one of:

- `affiliations`: Smita Krishnaswamy's affiliations listed on the home page.
- `courses`: Selected courses that Smita Krishnaswamy teaches listsed under `https://www.krishnaswamylab.org/teaching`.
- `members`: Information about members under `https://www.krishnaswamylab.org/members`.
- `projects`: Information about projects listed under `https://www.krishnaswamylab.org/projects`.
- `research_categories`: The types of research the Krishnaswamy Lab does listed on the home page.
- `selected_publications`: Selected publications for Smita Krishnaswamy `https://www.krishnaswamylab.org/publications`.
- `workshops`/year: Information about the workshops lead by Smita Krishnaswamy listed on `https://www.krishnaswamylab.org/workshops`.

and `<record>` is just the filename and represents a single element of the `data-type`. What is important is the content of the file not the name! Having a descriptive name makes it easier for humans to find and update.

So what should you put in a record? Well that is dependant on its *type*. The entire site is written with TypeScript and so each `data-type` has a class and a collection of properties that are expected listed below (or see `src/lib/types.ts`). 

**NOTE**: the presence of a `?` means that the property is optional!

# Types

## Affiliations

| Property | Type | Description |
| -------- | ---- | ----------- |
| title | string | name of affiliation |
| href | string | link to affiliation website |
| about | string | description of affiliation |
| quote? | quote | quote from the affiliation |

### Quote

| Property | Type | Description |
| -------- | ---- | ----------- |
| text | string | text of quote |
| attribute | string | who said the quote |


## Courses

## Members

| Property | Type | Description |
| -------- | ---- | ----------- |
| member | MemberName | name of member |
| title? | string | title of member, e.g. PhD |
| about? | string | about blurb for member |
| cv? | string | link to CV |
| image? | string | link to member image, should be `/static/member/<img-name>` |
| website? | string | link to website |
| isAlum? | boolean | `true` if member is an alumni |
| name_str? | string | how to display name on website |


### MemberName

| Property | Type | Description |
| -------- | ---- | ----------- |
| first | string | first name of member |
| middle? | string | middle name or initial of member |
| preferred? | string | preferred first name of member |
| last | string | last name of member |


## Projects

| Property | Type | Description |
| -------- | ---- | ----------- |
| projectUrl | string | link to project specific page on website |
| projectTitle | string | title to use in list on top of `/projects` page |
| projectAbbreviation | string | project abbreviation if it is a method |
| projectListDescription | string | description to use on top of `/projects` page |
| heroBlurb | string | short blurb to use inside hero section |
| heroImage | string | image to use with the hero section |
| authors | string[] | list of members affiliated with the project |
| journal | string | name of journal published in |
| journalImage? | string | image of journal to use with journal link |
| githubLink? | string | link to GitHub repository |
| publicationLink | string | link to publication |
| publicationImage? | string | sinlge image to show at bottom of prject |
| publicationTitle | string | full title of publication |
| publicationAbstract? | string | abstract of publication |
| publicationPoster? | string | poster affiliated with project |
| publicationYear | string|number | year when published |
| youtube? | string | link to YouTube video |

### Authors
| Property | Type | Description |
| -------- | ---- | ----------- |
| title | string | name of research category |

## Research Categories
| Property | Type | Description |
| -------- | ---- | ----------- |
| title | string | name of research category |
| about | string | description of category |
| image | string | image to use with category |
| examples? | ResearchExamples | list of examples to display |

### ResearchExample
| Property | Type | Description |
| -------- | ---- | ----------- |
| text | string | name of example |
| href | string | link to example |


## Selected Publications

## Workshops

### SyllabusDay


| Property | Type | Description |
| -------- | ---- | ----------- |
| day | string | day of event |
| items | SyllabusDayItems | list of topics covered |

### SyllabusDayItem

| Property | Type | Description |
| -------- | ---- | ----------- |
| col1? | string | type of content |
| href | string | link to content |
| col2 | string | name of Svelte component to use, one of `Colab`, `Forms`, `GitHub`.  |
| col3 | string |  name of content |
