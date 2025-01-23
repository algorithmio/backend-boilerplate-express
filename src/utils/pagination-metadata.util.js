const getPaginationMetadata = (count, page, limit) => {
  const totalPages = Math.ceil(count / limit);
  return {
    totalCount: count,
    currentPage: page,
    totalPages,
    hasNextPage: page < totalPages,
    hasPreviousPage: page > 1,
  };
};

module.exports = { getPaginationMetadata };
