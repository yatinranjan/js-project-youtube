module.exports = { generateSlug };

function generateSlug(title) {
    // Write your code inside this function only.
    // Convert the title to lowercase and replace spaces with hyphens
    const slug = title.toLowerCase().replace(/\s+/g, '-');

    return slug;
}

// Example 1
console.log(generateSlug("Hello World"));
// Output: "hello-world"

// Example 2
console.log(generateSlug("AlmaBetter Web Dev"));
// Output: "almabetter-web-dev"
