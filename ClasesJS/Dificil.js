
class Pagination {
    constructor (items = [], pageSize = 10) {
      this.items = items
      this.pageSize = Math.floor(pageSize)
      this.totalPages = Math.ceil(items.length / this.pageSize) || 1
      this.currentPage = 1
    }
  
    prevPage () {
      this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : this.currentPage
      return this
    }
  
    nextPage () {
      this.currentPage = (this.currentPage + 1 <= this.totalPages) ? this.currentPage + 1 : this.currentPage
      return this
    }
  
    firstPage () {
      this.currentPage = 1
      return this
    }
  
    lastPage () {
      this.currentPage = this.totalPages
      return this
    }
  
    goToPage (page) {
      if (Math.sign(page) === -1) {
        this.currentPage = 1
        return this
      } else {
        this.currentPage = page > this.totalPages ? this.totalPages : Math.floor(page)
        return this
      }
    }
  
    getVisibleItems () {
      const start = this.currentPage * this.pageSize - this.pageSize
      const end = this.currentPage * this.pageSize
      return this.items.slice(start, end)
    }
  }
