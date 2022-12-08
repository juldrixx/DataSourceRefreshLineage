function replacer(key, value) {
  if (Array.isArray(value)) {
    return value.filter((v) => v != null);
  }
  return value;
}

function downloadAsFile(data, fileName = 'file') {
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const href = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = href;
  link.download = `${fileName}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default { replacer, downloadAsFile };
