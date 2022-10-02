<!-- <React.Fragment>
			{activeStep === steps.length ? (
			  <React.Fragment>
				<Typography variant="h5" gutterBottom>
				  Thank you for your order.
				</Typography>
				<Typography variant="subtitle1">
				  Your order number is #2001539. We have emailed your order
				  confirmation, and will send you an update when your order has
				  shipped.
				</Typography>
			  </React.Fragment>
			) : (
			  <React.Fragment>
				{getStepContent(activeStep)}
				<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
				  {activeStep !== 0 && (
					<Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
					  뒤로
					</Button>
				  )}

				  <Button
					variant="contained"
					onClick={handleNext}
					sx={{ mt: 3, ml: 1 }}
				  >
					{activeStep === steps.length - 1 ? '결과 확인' : '다음'}
				  </Button>
				</Box>
			  </React.Fragment>
			)}
		  </React.Fragment> -->

<!--Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid-->