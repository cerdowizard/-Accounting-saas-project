import '../styles/dashboardStyle.scss'
const Pagenate = () => {
  return (
    <div>
          <div className="paginate">
              <nav aria-label="...">
                  <ul class="pagination">
                      <li class="page-item disabled">
                          <a class="page-link">Previous</a>
                      </li>
                      <li class="page-item"><a class="page-link" href="#">1</a></li>
                      <li class="page-item active" aria-current="page">
                          <a class="page-link" href="#">2</a>
                      </li>
                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                      <li class="page-item">
                          <a class="page-link" href="#">Next</a>
                      </li>
                  </ul>
                  <span>Displaying 1 - 2 of 2</span>
              </nav>
           
          </div>
    </div>
  )
}

export default Pagenate