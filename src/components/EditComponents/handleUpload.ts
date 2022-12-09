export function handleUpload(link: string, callback: (link: string) => void) {
  if (link.includes('drive')) {
    const before = link.substring(link.indexOf('d/') + 2)
    const after = before.substring(0, before.indexOf('/'))
    callback(`https://drive.google.com/uc?id=${after}`)
  }
  else{
    callback(link)
  }
}
