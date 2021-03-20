//@desc     Get all camps
//@route    GET /api/camps
//@access   Public
export const getCamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'show all camps' });
};

//@desc     Get a camp
//@route    GET /api/camps/:id
//@access   Public
export const getCampById = (req, res, next) => {
  res.status(200).json({ success: true, msg: `show ${req.params.id} camp` });
};

//@desc     create a camp
//@route    POST /api/camps
//@access   Public
export const createCamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'create a camp' });
};

//@desc     update a camp
//@route    PUT /api/camps/:id
//@access   Public
export const updateCamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `update ${req.params.id} camp` });
};

//@desc     delete a camp
//@route    DELETE /api/camps/:id
//@access   Public
export const deleteCamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `delete ${req.params.id} camp` });
};
