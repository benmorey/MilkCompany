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
    /* Set a fixed height for the cards */
    .card {
      height: 450px; /* Makes all cards taller */
    }

.card-img-top {
        width: 100%;
        height: auto; /* Maintain aspect ratio */
        max-height: 300px; /* Prevent the image from exceeding this height */
        object-fit: contain; /* Ensure the whole image fits inside */
        }

    /* Ensure card body takes up the remaining space */
    .card-body {
      display: flex;
      flex-direction: column;
      justify-content: center; /* Center content vertically */
      flex-grow: 1;
    }

    /* Container for the cards */
    .container {
                                                      margin-top: 20px;
    }

    /* Bar-style banner styling */
    .banner {
      background: linear-gradient(135deg, #6a11cb, #2575fc); /* Gradient background */
      color: white;
      padding: 20px 0;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
      font-family: 'Georgia', serif; /* Fancy font */
      letter-spacing: 2px; /* Spacing for a more elegant look */
    }

    .banner h1 {
      font-size: 2.5rem;
      font-weight: bold;
      margin: 0;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2); /* Subtle text shadow */
    }

    /* White background for the body */
    body {
      background-color: #ffffff; /* White background */
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

  <!-- Bootstrap JS (optional if you need any JS functionality) -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
