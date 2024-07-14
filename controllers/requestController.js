const Request = require("../models/request");

// Get requests by User ID
async function getRequestByUserId(req, res) {
  const userId = req.params.id;
  try {
        const requests = await Request.getRequestByUserId(userId);
        if (!requests) {
            return res.status(404).send("No requests found for this user");
        }
        res.json(requests);
    } catch (error) {
        res.status(500).send("Error retrieving requests");
    }
}

// Create a new request
async function createRequest(req, res) {
    const request = req.body;
    try {
        const createdRequest = await Request.createRequest(request);
        res.status(201).json(createdRequest);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error creating request");
    }
};

// Get all available requests
async function getAvailableRequest(req, res) {
    try {
        const requests = await Request.getAvailableRequests();
        if (!requests || requests.length === 0) {
            return res.status(404).send("No available requests found");
        }
        res.json(requests);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving available requests");
    }
}

// Update an accepted request with a new volunteer ID
async function updateAcceptedRequest(req, res) {
    const requestId = req.params.id;
    const newVolunteerId = req.body.volunteer_id;

    try {
        const updatedRequest = await Request.updateAcceptedRequest(requestId, newVolunteerId);
        if (!updatedRequest) {
            return res.status(404).send("Request not found");
        }
        res.json(updatedRequest);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error updating accepted request");
    }
}

// Get accepted requests by volunteer ID
async function getAcceptedRequestById(req, res) {
    const volunteerId = req.params.id;
    try {
        const requests = await Request.getAcceptedRequestById(volunteerId);
        if (!requests) {
            return res.status(404).send("No accepted requests found for this volunteer");
        }
        res.json(requests);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving accepted requests");
    }
}

// Update request to completed
async function updateCompletedRequest(req, res) {
    const requestId = req.params.id;

    try {
        const updatedRequest = await Request.updateCompletedRequest(requestId);
        if (!updatedRequest) {
            return res.status(404).send("Request not found");
        }
        res.json(updatedRequest);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error updating request to completed");
    }
}

// Get request by ID
async function getRequestById(req, res) {
    const requestId = req.params.id;
    try {
      const request = await Request.getRequestById(requestId);
      if (!request) {
        return res.status(404).send("Request not found");
      }
      res.json(request);
    } catch (error) {
      res.status(500).send("Error retrieving request");
    }
  }

// Get user details by id
async function getUserDetailsById(req, res) {
    const userId = req.params.id;
    try {
        const user = await Request.getUserDetailsById(userId);
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving user details");
    }
}

// Approve request
async function updateApproveRequest(req, res) {
    const requestId = req.params.id;
    const adminId = req.body.admin_id;

    try {
        const updatedRequest = await Request.updateApproveRequest(requestId, adminId);
        if (!updatedRequest) {
            return res.status(404).send("Request not found");
        }
        res.json(updatedRequest);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error approving request");
    }
}

// View Accepted Requests
async function getAcceptedRequest(req, res) {
    try {
        const requests = await Request.getAcceptedRequest();
        if (!requests) {
            return res.status(404).send("No accepted requests found");
        }
        res.json(requests);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving accepted requests");
    }
}

// Delete a request
async function deleteRequest(req, res) {
    const requestId = req.params.id;

    try {
        const success = await Request.deleteRequest(requestId);
        if (success) {
            return res.send("Request deleted successfully");
        } else {
            return res.status(404).send("Request not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting request");
    }
};

module.exports = {
    getRequestByUserId,
    createRequest,
    getAvailableRequest,
    updateAcceptedRequest,
    getAcceptedRequestById,
    updateCompletedRequest,
    getRequestById,
    getUserDetailsById,
    updateApproveRequest,
    getAcceptedRequest,
    deleteRequest
};
