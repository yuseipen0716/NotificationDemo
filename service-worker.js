// プッシュ通知を受けた時のイベント
self.addEventListener('push', function(event) {
  const title = 'Push通知テスト';
  const options = {
    body: event.data.text(), //サーバーからのメッセージ
    tag: title,
    icon: "image/icon-512x512.png",
    badge: "image/icon-512x512.png"
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// プッシュ通知をクリックした後のイベント
self.addEventListener('notificationclick', function(event) {
  event.notification.close();

  event.waitUntil(
    // プッシュ通知をクリックした時にブラウザを起動して表示するURL
    clients.openWindow('https://yuseipen0716.github.io/NotificationDemo/')
  );
});

// Service Worker インストール時に実行される
// キャッシュするファイルとかをここで登録する
self.addEventListener('install', (event) => {
  console.log('service worker install ...');
});
