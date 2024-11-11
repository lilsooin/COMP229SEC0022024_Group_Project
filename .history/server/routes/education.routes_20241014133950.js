import express from 'express'
    import qualificationCtrl from '../controllers/education.controller.js' 
    const router = express.Router()
    router.route('/api/qualifications').______(qualificationCtrl.create)
    router.route('/api/qualifications').get(qualificationCtrl.list)
    router.param('qualificationId', qualificationCtrl.qualificationByID)
    router.route('/api/qualifications/:qualificationId')._________(qualificationCtrl.read)
    router.route('/api/qualifications/:qualificationId').put(qualificationCtrl._________)
    router.route('/api/qualifications/:qualificationId').delete(qualificationCtrl.remove)

    export default router


