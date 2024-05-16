"use client"

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="errorWrapper">
      <h3 className="errorTitle">There was a problem!</h3>
      <p className="errorMessage">{error.message}</p>
      <p className="errorNote">Please try again later or contact support if the problem persists.</p>
      <p className="errorSupport">support@contentfeed.com</p>
    </div>
  )
}

export default error
