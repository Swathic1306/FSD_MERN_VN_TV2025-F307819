const Book = require("../models/BookModel");


exports.createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    const saved = await book.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    let filter = {};

    if (req.query.genre) {
      filter.genre = req.query.genre;
    }

    const books = await Book.find(filter).sort({ publishedYear: 1 });
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getOneBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) return res.status(404).json({ message: "Book Not Found" });

    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const updated = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated)
      return res.status(404).json({ message: "Book Not Found" });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.deleteBook = async (req, res) => {
  try {
    const removed = await Book.findByIdAndDelete(req.params.id);

    if (!removed)
      return res.status(404).json({ message: "Book Not Found" });

    res.json({ message: "Book Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
