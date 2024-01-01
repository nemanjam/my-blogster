### Add ssh key for deploy-nginx action

https://github.com/appleboy/ssh-action

```bash
ssh-keygen -t ed25519 -a 200 -C "your_email@example.com"

cat .ssh/id_ed25519.pub | ssh ubuntu@arm1 'cat >> .ssh/authorized_keys'
```