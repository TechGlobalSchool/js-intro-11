# HTML - CSS

## What is HTML?
- HTML is the skeleton/backbone of any web page/app
- DOCTYPE - tells browser which version of html to render/show (Most recent is v5)
- `html` - is the most parent element of the document
- tag? - `html` element - `<html></html>`. Element consists of tag

- `head` - Everything that is not visible to user
  - `title` - title of your web page
  - `meta elements` - useful information about your webpage
- `body` - Everything that is visible to users.
  - `headings` - Text elements
  - `p` - paragraph
  - `strong` - Bold text
  - `hr` - horizontal line
  - `br` - break
  - `div` - block elements
  - `img` - image element
  - `a` - anchor element. link
  - `ul` - unordered lists
  - `ol` - ordered lists
  - `li` - child list element
  - **Semantic Elements Examples** (Semantic = Meaningful)
  - header, main, section, nav, footer


## Styling
1. Inline styling: Apply styles right inside to the element itself. But its harder to maintain and manage. 
2. Internal styling: Styles are inside head section
3. External styling: Outsourcing styles into separate css file
- You can style elements using their tag, id, class
- CSS specificity: inline > internal > external


## Element attributes
- `img` - src, alt, width, height
- `a` - href, target
- `id` - Unique identifier
- `class` - common class selector

Notes:
- **Nesting**: Render element inside another element


# Day 2
## HTML tables
- Table is html element
- Can be used to display tabular data
- `table` - parent element
- `tr` - Table row element
- `th` - Table Heading
- `td` - Cell data
<!-- Optional elements -->
- `thead` - Group head elements
- `tbody` - Group content of table data
- `tfoot` - Group footer table data


## HTML Forms
- `form` - Most parent element
- `label` - Label/text for input element
- `input` - Used to take user information
  - text
  - email

- `button` - Button element
