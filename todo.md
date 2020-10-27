# Todo / Roadmap

1. Upload file Views

- Req:
  1. Button to click and upload file
  2. View file info before commiting to uploading it (things like `name`,
     `size`, `lastUpdated`) **flag if file size is to big**
  3. Visual queue that the file is being processed

2. New Table

- Add the new table so that it works as the prototype Req:
  1. Sticky table header
  2. 2/3 width until the user chooses a chart type then its 1/2
  3. Colored header and table lines
  4. **Tentative** Expand button to "pop" chart out over the part of the
     DataView screen so that most part of the left side of the screen is take by
     the table
  5. **Tentative** Sorting

3. New View Flow

- Partly implemented on 1.
- Req:
  1. When user uploads files the file part takes up 2/3 the 1/3 just says
     "select a file to view chart options"
  2. Once file is chosen a data table is shown on the 2/3 and the 1/3 lets users
     choose a chart
  3. Once chart is chosen its divided equally 1/2 and 1/2 and users can choose
     the aggregation and axi
  4. When chart is rendered it takes up 3/4 of the screen and the 1/4 table is
     replaced by the `table nav`

4. Table Nav

### Todo Before beta

1. Finish file upload - `done`
   - style file info - `done`
   - `ISSUE` when uploading bigger files the `DataTableView` takes longer than -
     `done` average time to load. Research the problem with how it renders
2. Add icon of chosen chart on chartSetoptions so that they know the type
3. Style Table Header - Show file info, such as total rows etc
4. Add headers for the chart
5. Prevent sumbitting to big files! > 50mb at first
6. New glyphicon

// Future

5. Add empty UI for the data manipulation part
6. Validate X/Y axis selection before goint to chart
