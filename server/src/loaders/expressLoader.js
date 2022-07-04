import express from 'express'
import apiRoutes from '../api'
import cors from 'cors'
import bodyParser from 'body-parser'

const allowedOrigins = [
	'http://localhost:3005',
	'https://my-lovely-site.com'
];

export default ({config}) => {
  const app = express()
  app.use(cors())

  // app.use(cors({
	// 	origin: function (origin, callback) {
	// 		// allow requests with no origin
	// 		// (like mobile apps or curl requests)
	// 		if (!origin) {
	// 			return callback(null, true);
	// 		}
      
	// 		if (allowedOrigins.indexOf(origin) === -1) {
	// 			const msg = 'The CORS policy for this site does not allow access from the specified Origin.';

	// 			return callback(new Error(msg), false);
	// 		}

	// 		return callback(null, true);
	// 	},
	// 	credentials: true
	// }));

  app.use(bodyParser.json())

  // app.use((request, response, next) => {
	// 	const err = new Error('Not Found');
	// 	err['status'] = 404;

	// 	next(err);
	// });

  // load api routes
  app.use(`/api/v${config.VERSION}`, apiRoutes())

  /// error handlers
	app.use((
		err,
		request,
		response, 
    next
	) => {
		let statusCode = typeof err === 'object' && err.status > 0
			? err.status
			: 500

		const {
			status = statusCode,
			name = '',
			message: error = 'Internal Application Error'
		} = err

		const customResponse = response
			.status(statusCode)
      .json({
        error,
        code: statusCode
      })
			// .json(StatusService.buildError(error, statusCode));
      
		return name === 'UnauthorizedError'
			? customResponse.end()
			: customResponse;
	})

  return app
}
