const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    // sum of the likes value from each blog, if a blog has no likes field will be s0
    return blogs.reduce((sum, blog) => sum + (blog.likes || 0), 0)
}

module.exports = {
    dummy,
    totalLikes
}
