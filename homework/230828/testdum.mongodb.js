db.local.aggregate([
  {
    $match: { sub_category: "의회비" },
  },
  {
    $group: {
      _id: "$city_or_province",
      expense_avg: {
        $max: "$former_expense",
      },
    },
  },
  {
    $sort: {
      expense_avg: -1,
    },
  },
]);
