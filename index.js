<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Database Records</title>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- Custom styles -->
  <style>
    .card {
      height: 450px;
    }
    
    .card-img-top {
      width: 100%;
      height: auto;
      max-height: 300px;
      object-fit: contain;
    }
    
    .card-body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-grow: 1;
    }
    
    .container {
      margin-top: 20px;
    }
    
    .banner {
      background: linear-gradient(135deg, #6a11cb, #2575fc);
      color: white;
      padding: 20px 0;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      font-family: 'Georgia', serif;
      letter-spacing: 2px;
    }
    
    .banner h1 {
      font-size: 2.5rem;
      font-weight: bold;
      margin: 0;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    }
    
    body {
      background-color: #ffffff;
    }
  </style>
</head>
<body>
  <div class="banner">
    <h1 class="mb-0">MILK!!</h1>
  </div>
  <div class="container">
    <div class="row justify-content-center mt-4">
      <% data.forEach(function(row) { %>
        <div class="col-md-4 mb-4 d-flex">
          <div class="card w-100">
            <img src="<%= row.milk_link %>" class="card-img-top" alt="<%= row.milk_name %> Image">
            <div class="card-body text-center">
              <h5 class="card-title"><%= row.milk_name %></h5>
            </div>
          </div>
        </div>
      <% }); %>
    </div>
  </div>
  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
