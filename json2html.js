

export default function json2html(data) {
    
    let html = '<table data-user="saihiteshkannepelly@gmail.com">';

    html += `
        <thead>
            <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
        </thead>
        <tbody>
    `;

    data.forEach(item => {
        html += `<tr>`;
        html += `<td>${item.Name}</td>`;
        html += `<td>${item.Age}</td>`;
        html += `<td>${item.Gender || ''}</td>`;  
        html += `</tr>`;
    });

    html += `</tbody></table>`;

    return html;
}
