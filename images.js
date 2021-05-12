const Image = require('@11ty/eleventy-img')
const { readdir } = require('fs/promises') // node helper for reading folders
const { parse } = require('path') // node helper for grabbing file names


export async function processImages(src,target) {
    const imageDir = src
    const files = await readdir(imageDir)
    for (const file of files) {
      const stats = await Image(imageDir + '/' + file, {
        widths: [300, 600, 1000, 1400], // edit to your heart's content
        outputDir: target,
        filenameFormat: (id, src, width, format) => {
          // make the filename something we can recognize.
          // In this case, it's just:
          // [original file name] - [image width] . [file format]
          return `${parse(file).name}-${width}.${format}`
        },
      })
      console.log(stats) // remove this if you don't want the logs
    }
}