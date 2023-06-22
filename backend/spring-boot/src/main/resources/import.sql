INSERT INTO church (id, zone, subgroup, location) VALUES (1, 'SA Zone 5', 'Ruwa', 'Zimre') ON conflict (id) do nothing;
INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_MODERATOR');
INSERT INTO roles(name) VALUES('ROLE_ADMIN');