
  <?php 

  // Retrieve the users feedback ratings
  $rating_t = $_GET['rating_t'];
  $rating_o = $_GET['rating_o'];
  $rating_c = $_GET['rating_c'];
  $rating_w = $_GET['rating_w'];
  $ip = $_SERVER['REMOTE_ADDR'];
  $from_page = $_GET['from_page'];

  // Connect to MySQL
  $dbhost = '123.123.123.12';
  $dbuser = 'user_name';
  $dbpass = 'pass_word';
  $conn = mysql_connect($dbhost,$dbuser,$dbpass) or die ('Failed to connect to Database<br />');

  // Connect to the feedback database
  $dbname = "database_name";
  mysql_select_db($dbname, $conn);

  // Insert record into the user_feedback table
  if(mysql_query("INSERT INTO user_feedback_g (rating_t, rating_o, rating_c, rating_w, ip, from_page) VALUES ($rating_t, $rating_o, $rating_c, $rating_w, \"$ip\", \"$from_page\");"))
    {
      echo "<font size='2'>Thank you!</font>";
    }else{
      echo "Error";
    }

  ?>

