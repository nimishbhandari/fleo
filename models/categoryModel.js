import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    currentSales: {
      type: Number,
      required: true,
    },
    totalTarget: {
      type: Number,
      required: true,
    },
    progress: {
      type: Number,
    },
    color: {
      type: String,
    },
    label: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;
