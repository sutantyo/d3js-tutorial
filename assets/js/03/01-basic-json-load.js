var filepath = d3.select('#data-01').attr('data-json-url') 

d3.json(filepath)
    .then((data) =>
    {
        var rows = d3.select('#data-01')
                     .append('table')
                     .append('tbody')
                     .selectAll('tr')
                     .data(data.results.slice(0,9))
                     .enter()
                     .append('tr')
        rows.append('td')
            .html((d, i) => `<a href='${d.url}'>${d.name}</a>`)
    }
)