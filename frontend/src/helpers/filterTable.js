export default function filterTable(table, keyName, filter) {
  return table.filter((obj) =>
    obj[keyName].toLowerCase().includes(filter.toLowerCase())
  );
}
