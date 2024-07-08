function filenameToFrontmatter(config) {
    return config.filename.value
        .replace(", ", "/")
        .replaceAll(" ", "-")
        .replaceAll(".", "")
        .toLowerCase();
}
module.exports = filenameToFrontmatter;