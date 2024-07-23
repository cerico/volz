ANSIBLE_PLAYBOOK := $$HOME/.pyvenv-ansible/bin/ansible-playbook
ANSIBLE_GALAXY := $$HOME/.pyvenv-ansible/bin/ansible-galaxy
PYTHON_ENVIRONMENT := $$HOME/.pyvenv-volz
tldr:
	@echo Available commands
	@echo ------------------
	@grep '^[[:alpha:]][^:[:space:]]*:' Makefile | cut -d ':' -f 1 | sort -u | sed 's/^/make /'
%:
	@$(MAKE) tldr
ansible:
	python3 -m venv ${PYTHON_ENVIRONMENT}
	source ${PYTHON_ENVIRONMENT}/bin/activate && python3 -m pip install --upgrade pip
	source ${PYTHON_ENVIRONMENT}/bin/activate && python3 -m pip install ansible
	$(ANSIBLE_GALAXY) collection install -r requirements.yml
html:
	$(ANSIBLE_PLAYBOOK) main.yml -i hosts --tags "html" -e curdir=$(CURDIR)
rails:
	$(ANSIBLE_PLAYBOOK) main.yml -i hosts --tags "rails" -e curdir=$(CURDIR)
vite:
	$(ANSIBLE_PLAYBOOK) main.yml -i hosts --tags "vite" -e curdir=$(CURDIR)
node:
	$(ANSIBLE_PLAYBOOK) main.yml -i hosts --tags "node" -e curdir=$(CURDIR)
astro:
	$(ANSIBLE_PLAYBOOK) main.yml -i hosts --tags "astro" -e curdir=$(CURDIR)
formik:
	$(ANSIBLE_PLAYBOOK) main.yml -i hosts --tags "formik" -e curdir=$(CURDIR)
railsreact:
	$(ANSIBLE_PLAYBOOK) main.yml -i hosts --tags "railsreact" -e curdir=$(CURDIR)
