const registerConfirmation = (namaPertama, verificationUrl) => `<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<title>[Mat Seen Kolam Pancing] Verifikasi Email </title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<style type="text/css">
		/**
   * Google webfonts. Recommended to include the .woff version for cross-client compatibility.
   */
		@media screen {
			@font-face {
				font-family: 'Source Sans Pro';
				font-style: normal;
				font-weight: 400;
				src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format('woff');
			}

			@font-face {
				font-family: 'Source Sans Pro';
				font-style: normal;
				font-weight: 700;
				src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format('woff');
			}
		}

		/**
   * Avoid browser level font resizing.
   * 1. Windows Mobile
   * 2. iOS / OSX
   */
		body,
		table,
		td,
		a {
			-ms-text-size-adjust: 100%;
			/* 1 */
			-webkit-text-size-adjust: 100%;
			/* 2 */
		}

		/**
   * Remove extra space added to tables and cells in Outlook.
   */
		table,
		td {
			mso-table-rspace: 0pt;
			mso-table-lspace: 0pt;
		}

		/**
   * Better fluid images in Internet Explorer.
   */
		img {
			-ms-interpolation-mode: bicubic;
		}

		/**
   * Remove blue links for iOS devices.
   */
		a[x-apple-data-detectors] {
			font-family: inherit !important;
			font-size: inherit !important;
			font-weight: inherit !important;
			line-height: inherit !important;
			color: inherit !important;
			text-decoration: none !important;
		}

		/**
   * Fix centering issues in Android 4.4.
   */
		div[style*="margin: 16px 0;"] {
			margin: 0 !important;
		}

		body {
			width: 100% !important;
			height: 100% !important;
			padding: 0 !important;
			margin: 0 !important;
		}

		/**
   * Collapse table borders to avoid space between cells.
   */
		table {
			border-collapse: collapse !important;
		}

		a {
			color: #1a82e2;
		}

		img {
			height: auto;
			line-height: 100%;
			text-decoration: none;
			border: 0;
			outline: none;
		}
	</style>

</head>

<body style="background-color: #e9ecef; padding-top: 50px !important;">

	<!-- start preheader -->
	<div class="preheader"
		style="display: none; max-width: 0; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #fff; opacity: 0;">
		Sahkan email anda.
	</div>
	<!-- end preheader -->

	<!-- start body -->
	<table border="0" cellpadding="0" cellspacing="0" width="100%">

		<!-- start logo -->
		<tr>
			<td align="center" bgcolor="#e9ecef">
				<!--[if (gte mso 9)|(IE)]>
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
        <tr>
        <td align="center" valign="top" width="600">
        <![endif]-->
				<table border="0" cellpadding="0" cellspacing="0" width="100%"
					style="max-width: 600px; background: #ffffff;">
					<tr>
						<td align="center" valign="top">
							<a href="https://paklongmatsen.com" target="_blank" style="display: inline-block;">
								<img src="https://kolammatsenpublic.blob.core.windows.net/public/logo.png" alt="Logo" border="0" width="200px" style="display: block; width: 200px; max-width: 200px; min-width: 200px;"/>
							</a>
						</td>
					</tr>
				</table>
				<!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
			</td>
		</tr>
		<!-- end logo -->

		<!-- start hero -->
		<tr>
			<td align="center" bgcolor="#e9ecef">
				<!--[if (gte mso 9)|(IE)]>
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
        <tr>
        <td align="center" valign="top" width="600">
        <![endif]-->
				<table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
					<tr>
						<td align="left" bgcolor="#ffffff"
							style="padding: 36px 24px 0; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;">
							<h1
								style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px; text-align: center;">
								Sahkan Email Anda</h1>
						</td>
					</tr>
				</table>
				<!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
			</td>
		</tr>
		<!-- end hero -->

		<!-- start copy block -->
		<tr>
			<td align="center" bgcolor="#e9ecef">
				<!--[if (gte mso 9)|(IE)]>
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
        <tr>
        <td align="center" valign="top" width="600">
        <![endif]-->
				<table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">

					<!-- start copy -->
					<tr>
						<td align="left" bgcolor="#ffffff"
							style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
							<p style="margin: 0;">Hi ${namaPertama}, Sila klik pada butang di bawah untuk mengesahkan
								email
								anda. Jika anda tidak mencipta akaun dengan kami, sila abaikan email ini.</p>
						</td>
					</tr>
					<!-- end copy -->

					<!-- start button -->
					<tr>
						<td align="left" bgcolor="#ffffff">
							<table border="0" cellpadding="0" cellspacing="0" width="100%">
								<tr>
									<td align="center" bgcolor="#ffffff" style="padding: 12px;">
										<table border="0" cellpadding="0" cellspacing="0">
											<tr>
												<td align="center" bgcolor="#1a82e2" style="border-radius: 6px;">
													<a href=${verificationUrl} target="_blank"
														style="display: inline-block; padding: 16px 36px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; color: #ffffff; text-decoration: none; border-radius: 6px;">Sahkan
														Email</a>
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
					<!-- end button -->

					<!-- start copy -->
					<tr>
						<td align="left" bgcolor="#ffffff"
							style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
							<p style="margin: 0;">Jika butang di atas tidak berfungsi, anda boleh copy & paste url di
								bawah di browser anda:</p>
							<p style="margin: 0;"><a href=${verificationUrl} target="_blank">Klik disini</a></p>
						</td>
					</tr>
					<!-- end copy -->

					<!-- start copy -->
					<tr>
						<td align="left" bgcolor="#ffffff"
							style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; border-bottom: 3px solid #d4dadf">
							<p style="margin: 0;">Terima kasih,<br> Kolam Pancing Paklong Mat Sen</p>
						</td>
					</tr>
					<!-- end copy -->

				</table>
				<!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
			</td>
		</tr>
		<!-- end copy block -->

		<!-- start footer -->
		<tr>
			<td align="center" bgcolor="#e9ecef" style="padding: 24px;">
				<!--[if (gte mso 9)|(IE)]>
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
        <tr>
        <td align="center" valign="top" width="600">
        <![endif]-->
				<table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">

					<!-- start permission -->
					<tr>
						<td align="center" bgcolor="#e9ecef"
							style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
							<p style="margin: 0;">Anda telah terima email ini kerana anda telah mencipta akaun melalui
								Mat Seen Kolam Pancing. Jika anda tidak mencipta akaun dengan kami, sila abaikan email ini.</p>
						</td>
					</tr>
					<!-- end permission -->
				</table>
				<!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
			</td>
		</tr>
		<!-- end footer -->

	</table>
	<!-- end body -->

</body>

</html>`

const forgotPassword = (namaPertama, verificationUrl) => `<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>[Mat Seen Kolam Pancing] Verifikasi Email </title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
        /**
   * Google webfonts. Recommended to include the .woff version for cross-client compatibility.
   */
        @media screen {
            @font-face {
                font-family: 'Source Sans Pro';
                font-style: normal;
                font-weight: 400;
                src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format('woff');
            }

            @font-face {
                font-family: 'Source Sans Pro';
                font-style: normal;
                font-weight: 700;
                src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format('woff');
            }
        }

        /**
   * Avoid browser level font resizing.
   * 1. Windows Mobile
   * 2. iOS / OSX
   */
        body,
        table,
        td,
        a {
            -ms-text-size-adjust: 100%;
            /* 1 */
            -webkit-text-size-adjust: 100%;
            /* 2 */
        }

        /**
   * Remove extra space added to tables and cells in Outlook.
   */
        table,
        td {
            mso-table-rspace: 0pt;
            mso-table-lspace: 0pt;
        }

        /**
   * Better fluid images in Internet Explorer.
   */
        img {
            -ms-interpolation-mode: bicubic;
        }

        /**
   * Remove blue links for iOS devices.
   */
        a[x-apple-data-detectors] {
            font-family: inherit !important;
            font-size: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
            color: inherit !important;
            text-decoration: none !important;
        }

        /**
   * Fix centering issues in Android 4.4.
   */
        div[style*="margin: 16px 0;"] {
            margin: 0 !important;
        }

        body {
            width: 100% !important;
            height: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
        }

        /**
   * Collapse table borders to avoid space between cells.
   */
        table {
            border-collapse: collapse !important;
        }

        a {
            color: #1a82e2;
        }

        img {
            height: auto;
            line-height: 100%;
            text-decoration: none;
            border: 0;
            outline: none;
        }
    </style>

</head>

<body style="background-color: #e9ecef; padding-top: 50px !important;">

    <!-- start preheader -->
    <div class="preheader"
        style="display: none; max-width: 0; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #fff; opacity: 0;">
        Reset Katalaluan Anda.
    </div>
    <!-- end preheader -->

    <!-- start body -->
    <table border="0" cellpadding="0" cellspacing="0" width="100%">

        <!-- start logo -->
        <tr>
            <td align="center" bgcolor="#e9ecef">
                <!--[if (gte mso 9)|(IE)]>
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
        <tr>
        <td align="center" valign="top" width="600">
        <![endif]-->
                <table border="0" cellpadding="0" cellspacing="0" width="100%"
                    style="max-width: 600px; background: #ffffff;">
                    <tr>
                        <td align="center" valign="top">
                            <a href="https://paklongmatsen.com" target="_blank" style="display: inline-block;">
                                <img src="https://kolammatsenpublic.blob.core.windows.net/public/logo.png" alt="Logo"
                                    border="0" width="200px"
                                    style="display: block; width: 200px; max-width: 200px; min-width: 200px;" />
                            </a>
                        </td>
                    </tr>
                </table>
                <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
            </td>
        </tr>
        <!-- end logo -->

        <!-- start hero -->
        <tr>
            <td align="center" bgcolor="#e9ecef">
                <!--[if (gte mso 9)|(IE)]>
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
        <tr>
        <td align="center" valign="top" width="600">
        <![endif]-->
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                        <td align="left" bgcolor="#ffffff"
                            style="padding: 36px 24px 0; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;">
                            <h1
                                style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px; text-align: center;">
                                Reset Katalaluan Anda</h1>
                        </td>
                    </tr>
                </table>
                <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
            </td>
        </tr>
        <!-- end hero -->

        <!-- start copy block -->
        <tr>
            <td align="center" bgcolor="#e9ecef">
                <!--[if (gte mso 9)|(IE)]>
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
        <tr>
        <td align="center" valign="top" width="600">
        <![endif]-->
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">

                    <!-- start copy -->
                    <tr>
                        <td align="left" bgcolor="#ffffff"
                            style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
                            <p style="margin: 0;">Hi ${namaPertama}, Sila klik pada butang di bawah untuk reset
                                katalaluan
                                anda. Jika anda tidak membuat permintaan untuk reset katalaluan akaun anda dengan kami,
                                sila abaikan email ini.</p>
                        </td>
                    </tr>
                    <!-- end copy -->

                    <!-- start button -->
                    <tr>
                        <td align="left" bgcolor="#ffffff">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td align="center" bgcolor="#ffffff" style="padding: 12px;">
                                        <table border="0" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td align="center" bgcolor="#1a82e2" style="border-radius: 6px;">
                                                    <a href=${verificationUrl} target="_blank"
                                                        style="display: inline-block; padding: 16px 36px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; color: #ffffff; text-decoration: none; border-radius: 6px;">Reset
                                                        Katalaluan</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <!-- end button -->

                    <!-- start copy -->
                    <tr>
                        <td align="left" bgcolor="#ffffff"
                            style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
                            <p style="margin: 0;">Jika butang di atas tidak berfungsi, anda boleh copy & paste url di
                                bawah di browser anda:</p>
                            <p style="margin: 0;"><a href=${verificationUrl} target="_blank">Klik disini</a></p>
                        </td>
                    </tr>
                    <!-- end copy -->

                    <!-- start copy -->
                    <tr>
                        <td align="left" bgcolor="#ffffff"
                            style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; border-bottom: 3px solid #d4dadf">
                            <p style="margin: 0;">Terima kasih,<br> Kolam Pancing Paklong Mat Sen</p>
                        </td>
                    </tr>
                    <!-- end copy -->

                </table>
                <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
            </td>
        </tr>
        <!-- end copy block -->

        <!-- start footer -->
        <tr>
            <td align="center" bgcolor="#e9ecef" style="padding: 24px;">
                <!--[if (gte mso 9)|(IE)]>
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
        <tr>
        <td align="center" valign="top" width="600">
        <![endif]-->
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">

                    <!-- start permission -->
                    <tr>
                        <td align="center" bgcolor="#e9ecef"
                            style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
                            <p style="margin: 0;">Anda telah terima email ini kerana anda telah membuat permintaan untuk
                                reset katalaluan akaun anda di
                                Kolam Pancing Paklong Mat Sen. Jika anda tidak mencipta akaun dengan kami, sila abaikan
                                email
                                ini.</p>
                        </td>
                    </tr>
                    <!-- end permission -->
                </table>
                <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
            </td>
        </tr>
        <!-- end footer -->

    </table>
    <!-- end body -->

</body>

</html>`

const bookingSuccessful = ({ namaPertama, tarikhPancing, kolamId, paymentHtml, qrCodeImage }) => {
	return `<!DOCTYPE html>
	<html>
	
	<head>
		<meta charset="utf-8">
		<meta http-equiv="x-ua-compatible" content="ie=edge">
		<title>[Mat Seen Kolam Pancing] Verifikasi Email </title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<style type="text/css">
			/**
	   * Google webfonts. Recommended to include the .woff version for cross-client compatibility.
	   */
			@media screen {
				@font-face {
					font-family: 'Source Sans Pro';
					font-style: normal;
					font-weight: 400;
					src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format('woff');
				}
	
				@font-face {
					font-family: 'Source Sans Pro';
					font-style: normal;
					font-weight: 700;
					src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format('woff');
				}
			}
	
			/**
	   * Avoid browser level font resizing.
	   * 1. Windows Mobile
	   * 2. iOS / OSX
	   */
			body,
			table,
			td,
			a {
				-ms-text-size-adjust: 100%;
				/* 1 */
				-webkit-text-size-adjust: 100%;
				/* 2 */
			}
	
			/**
	   * Remove extra space added to tables and cells in Outlook.
	   */
			table,
			td {
				mso-table-rspace: 0pt;
				mso-table-lspace: 0pt;
			}
	
			/**
	   * Better fluid images in Internet Explorer.
	   */
			img {
				-ms-interpolation-mode: bicubic;
			}
	
			/**
	   * Remove blue links for iOS devices.
	   */
			a[x-apple-data-detectors] {
				font-family: inherit !important;
				font-size: inherit !important;
				font-weight: inherit !important;
				line-height: inherit !important;
				color: inherit !important;
				text-decoration: none !important;
			}
	
			/**
	   * Fix centering issues in Android 4.4.
	   */
			div[style*="margin: 16px 0;"] {
				margin: 0 !important;
			}
	
			body {
				width: 100% !important;
				height: 100% !important;
				padding: 0 !important;
				margin: 0 !important;
			}
	
			/**
	   * Collapse table borders to avoid space between cells.
	   */
			table {
				border-collapse: collapse !important;
			}
	
			a {
				color: #1a82e2;
			}
	
			img {
				height: auto;
				line-height: 100%;
				text-decoration: none;
				border: 0;
				outline: none;
			}
		</style>
	
	</head>
	
	<body style="background-color: #e9ecef; padding-top: 50px !important;">
	
		<!-- start preheader -->
		<div class="preheader"
			style="display: none; max-width: 0; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #fff; opacity: 0;">
			Booking Berjaya!
		</div>
		<!-- end preheader -->
	
		<!-- start body -->
		<table border="0" cellpadding="0" cellspacing="0" width="100%">
	
			<!-- start logo -->
			<tr>
				<td align="center" bgcolor="#e9ecef">
					<!--[if (gte mso 9)|(IE)]>
			<table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
			<tr>
			<td align="center" valign="top" width="600">
			<![endif]-->
					<table border="0" cellpadding="0" cellspacing="0" width="100%"
						style="max-width: 600px; background: #ffffff;">
						<tr>
							<td align="center" valign="top">
								<a href="https://paklongmatsen.com" target="_blank" style="display: inline-block;">
									<img src="https://kolammatsenpublic.blob.core.windows.net/public/logo.png" alt="Logo"
										border="0" width="200px"
										style="display: block; width: 200px; max-width: 200px; min-width: 200px;" />
								</a>
							</td>
						</tr>
					</table>
					<!--[if (gte mso 9)|(IE)]>
			</td>
			</tr>
			</table>
			<![endif]-->
				</td>
			</tr>
			<!-- end logo -->
	
			<!-- start hero -->
			<tr>
				<td align="center" bgcolor="#e9ecef">
					<!--[if (gte mso 9)|(IE)]>
			<table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
			<tr>
			<td align="center" valign="top" width="600">
			<![endif]-->
					<table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
						<tr>
							<td align="left" bgcolor="#ffffff"
								style="padding: 36px 24px 0; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;">
								<h1
									style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px; text-align: center;">
									Booking Berjaya!</h1>
							</td>
						</tr>
					</table>
					<!--[if (gte mso 9)|(IE)]>
			</td>
			</tr>
			</table>
			<![endif]-->
				</td>
			</tr>
			<!-- end hero -->
	
			<!-- start copy block -->
			<tr>
				<td align="center" bgcolor="#e9ecef">
					<!--[if (gte mso 9)|(IE)]>
			<table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
			<tr>
			<td align="center" valign="top" width="600">
			<![endif]-->
					<table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
	
						<!-- start copy -->
						<tr>
							<td align="left" bgcolor="#ffffff"
								style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
								<p style="margin: 0;">Hi ${namaPertama}, booking anda di Kolam Pancing Paklong Mat Sen telah
									berjaya!</p>
	
							</td>
						</tr>
						<tr>
							<td align="center" bgcolor="#ffffff"
								style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
								<img src="${qrCodeImage}" style="width: 200px; height: 200px;" />
							</td>
						</tr>
						<tr>
							<td align="center" bgcolor="#ffffff"
								style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
								<p style="margin: 0; font-weight: bold;">
									Sila gunakan QR Code di atas untuk masuk ke kolam pancing.
								</p>
							</td>
						</tr>
						<tr>
							<td align="left" bgcolor="#ffffff"
								style="padding-left: 24px; padding-right: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
								<p style="margin: 0; font-weight: bold;">
									Ringkasan booking:
								</p>
							</td>
						</tr>
						<tr>
							<td align="left" bgcolor="#ffffff"
								style="padding-left: 24px; padding-right: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
								<p style="margin: 0; font-weight: 500;">
									Tarikh pancing - ${tarikhPancing}
								</p>
							</td>
						</tr>
						<tr>
							<td align="left" bgcolor="#ffffff"
								style="padding-left: 24px; padding-right: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
								<p style="margin: 0; font-weight: 500;">
									Lokasi Kolam - ${kolamId}
								</p>
							</td>
						</tr>
						<tr>
							<td align="left" bgcolor="#ffffff"
								style="padding-top: 24px; padding-left: 24px; padding-right: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
								<table border="1" cellpadding="10" cellspacing="0"
									style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif;">
									<thead>
										<tr style="background-color: #f2f2f2;">
											<th style="text-align: center;">Item</th>
											<th style="text-align: center;">Bilangan</th>
											<th style="text-align: center;">Nota</th>
											<th style="text-align: center;">Amaun (MYR)</th>
										</tr>
									</thead>
									<tbody>
										${paymentHtml}
									</tbody>
								</table>
							</td>
						</tr>
						<!-- end copy -->
	
						<!-- start button -->
	
						<!-- end button -->
	
	
	
						<!-- start copy -->
						<tr>
							<td align="left" bgcolor="#ffffff"
								style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; border-bottom: 3px solid #d4dadf">
								<p style="margin: 0;">Terima kasih & selamat memancing,<br> Kolam Pancing Paklong Mat Sen
								</p>
							</td>
						</tr>
						<!-- end copy -->
	
					</table>
					<!--[if (gte mso 9)|(IE)]>
			</td>
			</tr>
			</table>
			<![endif]-->
				</td>
			</tr>
			<!-- end copy block -->
	
			<!-- start footer -->
			<tr>
				<td align="center" bgcolor="#e9ecef" style="padding: 24px;">
					<!--[if (gte mso 9)|(IE)]>
			<table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
			<tr>
			<td align="center" valign="top" width="600">
			<![endif]-->
					<table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
	
						<!-- start permission -->
						<tr>
							<td align="center" bgcolor="#e9ecef"
								style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
								<p style="margin: 0;">Anda telah terima email ini kerana anda telah booking di
									Kolam Pancing Paklong Mat Sen.</p>
							</td>
						</tr>
						<!-- end permission -->
					</table>
					<!--[if (gte mso 9)|(IE)]>
			</td>
			</tr>
			</table>
			<![endif]-->
				</td>
			</tr>
			<!-- end footer -->
	
		</table>
		<!-- end body -->
	
	</body>
	
	</html>`
}

module.exports = {
	registerConfirmation,
	forgotPassword,
	bookingSuccessful
}