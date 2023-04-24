<?php
$to = " premj204@gmail.com";
$subject = $_POST['subject'];
$msg = "
<html>
<head>
<title>Contact Form</title>
</head>
<body>
<p><b>Enquiry Regarding :</b> ".$_POST['subject']."</p>
<table>
<tr>
<td>Name: </td><td>".$_POST['name']."</td>
</tr>
<tr>
<td>Email: </td><td>".$_POST['email']."</td>
</tr>
<tr>
<td>Subject: </td><td>".$_POST['subject']."</td>
</tr>
<tr>
<td>Contact No.: </td><td>".$_POST['mobile']."</td>
</tr>
<tr>
<td>Message: </td><td>".$_POST['msg']."</td>
</tr>
<tr>
</tr>
</table>
</body>
</html>
";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: ".$_POST['name']." ".$_POST['email']."'" . "\r\n";
// $headers .= "Cc: Prem <premj204@gmail.com>" . "\r\n";
$mail=mail($to,$subject,$msg,$headers);
if($mail){
  echo "<script>alert('mail successfully send')</script>";
}
?>
