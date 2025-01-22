const { onSchedule } = require("firebase-functions/v2/scheduler");
const admin = require("firebase-admin");

admin.initializeApp();

exports.cleanUpExpiredActivities = onSchedule("0 * * * *", async () => {
  // 例如，每小时执行一次
  const db = admin.firestore();
  const now = new Date();

  try {
    // 查询活动时间早于当前 now 的，说明已经开始或已过期
    const activitiesRef = db.collection("activities");
    const expiredActivitiesQuery = activitiesRef.where("time", "<", now);

    const snapshot = await expiredActivitiesQuery.get();

    if (snapshot.empty) {
      console.log("没有过期活动需要清理。");
      return;
    }

    // 批量删除过期活动
    const batch = db.batch();
    snapshot.forEach((doc) => {
      batch.delete(doc.ref);
    });

    await batch.commit();
    console.log(`清理完成，删除了 ${snapshot.size} 个过期活动。`);
  } catch (error) {
    console.error("清理过期活动时出错：", error);
  }
});
