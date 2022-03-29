import React from "react";

function SearchBar({handleSearch}) {
  return (
    <div> 
    {/* <div className="search">
      <input 
        type="text"
        placeholder="Search Procedure"
        id="search"
        onChange={handleSearch} /> */}
         {/* <input 
        type="text"
        placeholder="Search Facility"
        id="search"
        onChange={handleSearch} />
         <input 
        type="text"
        placeholder="Search State"
        id="search"
        onChange={handleSearch} />
         <input 
        type="text"
        placeholder="Search City"
        id="search"
        onChange={handleSearch} /> */}
    {/* </div > */}
    <div class="container">
    <div class="row height d-flex justify-content-center align-items-center">
        <div class="col-md-8">
            <div class="search"> <i class="fa fa-search"></i> <input onChange={handleSearch} type="text" class="form-control" placeholder="Search for Procedure / Facility / State / City"/> <button class="btn btn-primary">Search</button> </div>
        </div>
    </div>
</div>
    
    </div>



  );
}

export default SearchBar;
