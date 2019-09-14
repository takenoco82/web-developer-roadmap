'use strict';

const users = [
  {
    username: "alice",
    email: "alice@example.com",
    user_id: "592f11060f95a3d3d46a987a"
  },
  {
    username: "bob",
    email: "bob@example.com",
    user_id: "dc3ad304370b2aeb3fa38409"
  },
  {
    username: 'Yvette Ebert',
    email: 'bluerabbit18@gmail.com',
    user_id: 'CzYXySlfOSJCDHfC6lUCc0Bp'
  },
  {
    username: 'Julianne Schroeder',
    email: 'violetwolf76@gmail.com',
    user_id: 'nrl3B8dcgBIh8OkERrOSyhmt'
  },
  {
    username: 'Mckayla Wiza',
    email: 'redwolf67@gmail.com',
    user_id: 'UQDhgQq1l125nknmG5RSdmuG'
  },
  {
    username: 'Jaquelin Kub',
    email: 'Jaquelin.Kub@frederique.net',
    user_id: 'mC3xJ5i1V8vWUv62DQpduFql'
  },
  {
    username: 'Kelton Considine',
    email: 'Kelton.Considine@abbey.biz',
    user_id: 'CXT9zzVuKuH7Wmgu6bl7NFEk'
  },
  {
    username: 'Allene Wilkinson',
    email: 'azurerabbit99@gmail.com',
    user_id: 'vPafgkQtmqIBc1UhE169OuRE'
  },
  {
    username: 'Lukas Hettinger',
    email: 'skybluefrog56@gmail.com',
    user_id: 'o4mGDg3OzFmc7PGrSGKfaA25'
  },
  {
    username: 'Vivien Bode',
    email: 'Vivien.Bode@mariana.name',
    user_id: 'cdIrMlbR5KsQKZBeil8h5kBx'
  },
  {
    username: 'Mikel Kirlin',
    email: 'limeturtle72@gmail.com',
    user_id: '9h8POti85JFfOC8ZFNp4AWCc'
  },
  {
    username: 'Kale Gutmann',
    email: 'Kale.Gutmann@elwin.net',
    user_id: 'Ch5fla7uchXIKXp9KJz1vZFC'
  },
  {
    username: 'Kali Kovacek',
    email: 'Kali.Kovacek@geo.name',
    user_id: 'C5EKixYlKsauFnhUmjBGXPsg'
  },
  {
    username: 'Isadore Pacocha',
    email: 'Isadore.Pacocha@kareem.org',
    user_id: 'jZhqoa1l3TdHF210I18PKnhM'
  },
  {
    username: 'Tatum Anderson',
    email: 'turquoiserabbit66@gmail.com',
    user_id: 'gy4G6mLfBZwBXZVZiVSv4N9G'
  },
  {
    username: 'Helene Schaefer',
    email: 'ivoryturtle67@gmail.com',
    user_id: 'TXRenlYzaUrHAKzRnyfjtGUi'
  },
  {
    username: 'Jacky Dare',
    email: 'turquoisewolf49@gmail.com',
    user_id: 'TLfcE5DrCmoDxjqdfl3ASgrF'
  },
  {
    username: 'Austyn Runte',
    email: 'salmonwolf89@gmail.com',
    user_id: 'CnlWT8GFsepIXIEcuypkfVC6'
  },
  {
    username: 'Chanelle Ritchie',
    email: 'Chanelle.Ritchie@ford.net',
    user_id: 'o626mLkjpzUCXxTqnl5nmsMA'
  },
  {
    username: 'Albertha Daugherty',
    email: 'tanwolf45@gmail.com',
    user_id: 'hAvkBvCguzoxtRMnL8j0EgpE'
  },
  {
    username: 'Ned Brakus',
    email: 'Ned.Brakus@jerrell.biz',
    user_id: 'A0p3OrfqY7a2vHyHckkjweHE'
  },
  {
    username: 'Wilfredo Prosacco',
    email: 'Wilfredo.Prosacco@mable.biz',
    user_id: 'mApmF2fPSx05YnnAdVabeIyw'
  },
  {
    username: 'Emil Cole',
    email: 'pinkturtle20@gmail.com',
    user_id: 'wVeHjLAjMnVviazso0nSuQSO'
  },
  {
    username: "Mina O'Conner",
    email: 'goldrabbit85@gmail.com',
    user_id: 'tetAywImP3SIm0k87fchWLc9'
  },
  {
    username: 'Grace Spencer',
    email: 'Grace.Spencer@desiree.org',
    user_id: 'TgUGQF18o4JdhDeE7x7fTWUN'
  },
  {
    username: 'Tanner Schuster',
    email: 'Tanner.Schuster@clotilde.info',
    user_id: 'oQTcTQwmuy7AUiTX5ATrcEtS'
  },
  {
    username: 'Karine Witting',
    email: 'Karine.Witting@ellsworth.org',
    user_id: 'wLwfPt5v2kC5RRNvXoY9qZux'
  },
  {
    username: 'Colt Haley',
    email: 'Colt.Haley@kade.com',
    user_id: 'EYjukXVslbsACTYdIcPyk3K4'
  },
  {
    username: 'Tevin Pollich',
    email: 'Tevin.Pollich@karlie.biz',
    user_id: 'hnmWiFhrNMcKJZt9V2d24tfn'
  },
  {
    username: 'Nicola Bruen',
    email: 'Nicola.Bruen@cheyanne.name',
    user_id: 'COZA4ts8cYVCMVY2SQpKYCdT'
  },
  {
    username: 'Kaylee Keebler',
    email: 'pinkfrog75@gmail.com',
    user_id: 'Kc1VeUJlRMXH7TxGRfJCJF5G'
  },
  {
    username: 'Geoffrey Rodriguez',
    email: 'cyanrabbit15@gmail.com',
    user_id: 'THly7h8d0WiNf90NyS9uEsYa'
  },
  {
    username: 'Tracey Reynolds',
    email: 'Tracey.Reynolds@hayley.net',
    user_id: '3vXlpARIWWZBCKvZRisk36sI'
  },
  {
    username: 'Domingo Volkman',
    email: 'pinkrabbit10@gmail.com',
    user_id: '853iReFHaB2Pg8AsGCM9ZPm0'
  },
  {
    username: 'Osborne Anderson',
    email: 'goldsquirrel08@gmail.com',
    user_id: 'J7IkP8NQm8YA7wsOVEsUo7Iu'
  },
  {
    username: 'Tiara Jaskolski',
    email: 'redsquirrel46@gmail.com',
    user_id: 'FLMboR6OqGkgVkXH9jPqdC8O'
  },
  {
    username: 'Brandy Schaden',
    email: 'yellowrabbit79@gmail.com',
    user_id: 'wsucVKkVPmEkoJ8rmKXAd3Yh'
  },
  {
    username: 'Maryse Kertzmann',
    email: 'Maryse.Kertzmann@darrick.name',
    user_id: '4YMZAteMYjHQy3Fcdg1CveGX'
  },
  {
    username: 'Jordane Mosciski',
    email: 'Jordane.Mosciski@joy.biz',
    user_id: 'wbn0bY8AKiYvxR3dG8mMJGG0'
  },
  {
    username: 'Frederique Quitzon',
    email: 'Frederique.Quitzon@krystel.net',
    user_id: 'AUc2DZl6QuQMi13YjHUyppd7'
  },
  {
    username: 'Reginald Bradtke',
    email: 'pinkrabbit18@gmail.com',
    user_id: 'rZUXDPwDDQyAAxEzDcpnoMso'
  },
  {
    username: 'Earlene Ernser',
    email: 'maroongiraffe02@gmail.com',
    user_id: 'QgwxitW7VPSag1FNt55GMT5L'
  },
  {
    username: 'Stacey West',
    email: 'blacksquirrel00@gmail.com',
    user_id: 'FU7gVDY8WC3yInKVezxMjOVt'
  },
  {
    username: 'Isabel Borer',
    email: 'greenturtle02@gmail.com',
    user_id: 'BNvGVyfxGaWNaowRppUqKoba'
  },
  {
    username: 'Electa Beahan',
    email: 'Electa.Beahan@hunter.org',
    user_id: 'dwKgxIRqtn5vkF2f2Daam08i'
  },
  {
    username: 'Samara Schuster',
    email: 'cyangiraffe23@gmail.com',
    user_id: 'zgaMEVGlfO2IK26A7eEtXDx8'
  },
  {
    username: 'Gregoria Jakubowski',
    email: 'orangefrog81@gmail.com',
    user_id: 'sjQrhoLTc4dB4g4TG587Qzed'
  },
  {
    username: 'Jaylin Johns',
    email: 'Jaylin.Johns@axel.org',
    user_id: '3tUO6gvZRek5aKj6AqOb8u84'
  },
  {
    username: 'Kristin Bins',
    email: 'greyfrog17@gmail.com',
    user_id: 'qiLugW0ac2YYBnC1uctc47TP'
  },
  {
    username: 'Ivy Conroy',
    email: 'cyanrabbit49@gmail.com',
    user_id: 'SoqdJcis9WR4vWf21Vw8fSus'
  },
  {
    username: 'Destiney McLaughlin',
    email: 'tanrabbit54@gmail.com',
    user_id: 'LvyvAX722XbXpdUXBn74Muos'
  },
  {
    username: 'Nia Grant',
    email: 'salmonsquirrel83@gmail.com',
    user_id: 'fF1GqRSA7ULDX27C7nH3DuM9'
  },
  {
    username: 'Katarina Collier',
    email: 'Katarina.Collier@michaela.com',
    user_id: 'iXZk4LgbYZfg8KCvLkU51Q6J'
  },
  {
    username: 'Sid Torp',
    email: 'Sid.Torp@vinnie.com',
    user_id: 'DioM6qhzLxfjFDFV1hfX4Bcm'
  },
  {
    username: 'Cecelia Rutherford',
    email: 'Cecelia.Rutherford@eula.biz',
    user_id: 'zX0jYlN9lPEJaEKc45rz9Ua2'
  },
  {
    username: 'Lyda McClure',
    email: 'silverwolf42@gmail.com',
    user_id: 'pL5l61fmkr4eg5MoUKFtIfxb'
  },
  {
    username: 'Theresa Reynolds',
    email: 'Theresa.Reynolds@braeden.net',
    user_id: 'Cc6GkSrAJqmrj6OrSmK0II5X'
  },
  {
    username: 'Flossie Emmerich',
    email: 'Flossie.Emmerich@odessa.com',
    user_id: 'ArygbNHAAdIsj14PWVs3KDLX'
  },
  {
    username: 'Sasha Schowalter',
    email: 'tanturtle36@gmail.com',
    user_id: 'N17sAdD8XzhKEceqmykSFeD5'
  },
  {
    username: 'Major Ernser',
    email: 'oliveturtle53@gmail.com',
    user_id: 'kZnUR5ElpYdgS4bJhHeqhUh1'
  },
  {
    username: 'Aliyah Ryan',
    email: 'Aliyah.Ryan@chaya.org',
    user_id: 'gs67XeJQLvQLepRcC4aoXwDl'
  },
  {
    username: 'Fabian Murazik',
    email: 'Fabian.Murazik@georgiana.info',
    user_id: 'YKk9S3XGgoLFca5eHTOMwpcx'
  },
  {
    username: 'Jefferey Kuhlman',
    email: 'pinkgiraffe24@gmail.com',
    user_id: 'nQDfqt5kn3Udxw3av08ECFxd'
  },
  {
    username: 'Jany Lueilwitz',
    email: 'Jany.Lueilwitz@shanel.name',
    user_id: 'gkFCQfquVqt2HtxHug14OFW7'
  },
  {
    username: 'Torey Wisozk',
    email: 'ivorygiraffe17@gmail.com',
    user_id: 'OoZ2X4POxww3nHPPfhqnhWwb'
  },
  {
    username: 'Horacio White',
    email: 'goldwolf18@gmail.com',
    user_id: 'qtdJtNbOI4fgBFjkp3qpQSvr'
  },
  {
    username: 'Florine White',
    email: 'turquoisewolf72@gmail.com',
    user_id: 'np33L9xayN04CRYBYE1iRwNA'
  },
  {
    username: 'Lowell Reichel',
    email: 'Lowell.Reichel@jalyn.com',
    user_id: 'fXdxlJoTOccWG5HlmxhKhoCf'
  },
  {
    username: 'Laisha Reichel',
    email: 'magentasquirrel53@gmail.com',
    user_id: 'A08JenHIYSr2AwKYtyCi5Fq3'
  },
  {
    username: 'Edward Boehm',
    email: 'lavenderfrog02@gmail.com',
    user_id: 'XnSMoJ8rbqoL6DbIiFvS3N1S'
  },
  {
    username: 'Rosalinda Armstrong',
    email: 'fuchsiawolf29@gmail.com',
    user_id: 'bGeKDdAnFst3fMPb3ySj36V0'
  },
  {
    username: 'Freddie Fay',
    email: 'purplesquirrel04@gmail.com',
    user_id: 'UAbn33NcN4FKvIcuZS4s3PvJ'
  },
  {
    username: 'Felicity Bartoletti',
    email: 'greengiraffe78@gmail.com',
    user_id: 'EWFAadnCdUPKYp7CACRo5LAG'
  },
  {
    username: 'Retha Kirlin',
    email: 'purplefrog36@gmail.com',
    user_id: 'BzXBkt627Kgkl9i8PNK92mKE'
  },
  {
    username: 'Cristal Wisoky',
    email: 'orangesquirrel55@gmail.com',
    user_id: 'YduDiKvPG167F34U9IqcUcsP'
  },
  {
    username: 'Domenic Cummings',
    email: 'redsquirrel12@gmail.com',
    user_id: 'i9EEUUDh8tuJDRGhHD6y9SzW'
  },
  {
    username: 'Hershel Cole',
    email: 'Hershel.Cole@jaylon.name',
    user_id: 'YZ9YAIZikqyEoHbt1fxvrxYE'
  }
];

/**
 * Delete the user.
 *
 *
 * user_id String
 * no response value expected for this operation
 **/
exports.delete_user = function (user_id) {
  return new Promise(function (resolve, reject) {
    const user = users.find(item => item.user_id === user_id);

    if (user === undefined) {
      reject({ code: 404, payload: null });
    } else {
      resolve();
    }
  });
}


/**
 * Get the user.
 *
 *
 * user_id String
 * returns ReadUser
 **/
exports.get_user = function (user_id) {
  return new Promise((resolve, reject) => {
    const user = users.find(item => item.user_id === user_id);

    if (user === undefined) {
      reject({ code: 404, payload: null });
    } else {
      resolve(user);
    }
  });
}


/**
 * Lists users.
 *
 *
 * sort String  (optional)
 * returns ReadUsers
 **/
exports.get_users = function (sort) {
  return new Promise(function (resolve, reject) {
    const result = { users: users };
    resolve(result);
  });
}


/**
 * Create a new user.
 *
 *
 * body WriteUser Created user object
 * returns ReadUser
 **/
exports.post_user = function (body) {
  return new Promise(function (resolve, reject) {
    const user = {
      user_id: getUniqueStr(),
      username: body.username,
      email: body.email
    };
    users.push(user);
    resolve(user);
  });
}


/**
 * Update the user.
 *
 *
 * user_id String
 * body WriteUser Updated user object
 * returns ReadUser
 **/
exports.put_user = function (user_id, body) {

  return new Promise(function (resolve, reject) {
    const user = users.find(item => item.user_id === user_id);

    if (user === undefined) {
      reject({ code: 404, payload: null });
    } else {
      user.username = body.username;
      user.email = body.email;
      resolve(user);
    }
  });
}


function getUniqueStr(myStrong) {
  var strong = 1000;
  if (myStrong) strong = myStrong;
  return new Date().getTime().toString(24) + Math.floor(strong * Math.random()).toString(16)
}
