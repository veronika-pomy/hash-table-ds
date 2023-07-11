// hash table - or hash map - is a data structure that is used to store key-value pairs
// given a key, you can associate a value with that key for a very fast lookup
// JS Object is a special implementation of the hash table data structure. Object class adds its own keys. Keys that are input may conflict and overwrite the inherited default properties 
// Maps allow to store key-value pairs without object's special implementation.

// Implementation
// - Typically the key value pairs are stored in a fixed size arrays, arrays have numeric indices
// - To go from using a string as an index to using a number as an index, need to use a hashing function 
// - Once there is an index, we can store a value
// - The same hashing function is used to retrieve the value given a key 

// A Hashing Function - accepts the string key, converts it into a hash code using a defined logic and then maps it into a numeric index that is within the bounds of the array

// Three supported operations:
    // Set to store a key-value pair
    // Get to retreive a value given its key
    // Remove to delete a key-value pair 

// Common uses: when constant time lookup and insertion are required
    // Database indexing
    // Caches
    