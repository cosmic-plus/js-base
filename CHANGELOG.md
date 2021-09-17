**base /**
[Readme](https://cosmic.plus/#view:js-base)
• [Contributing](https://cosmic.plus/#view:js-base/CONTRIBUTING)
• [Changelog](https://cosmic.plus/#view:js-base/CHANGELOG)

# Changelog

All notable changes to this project will be documented in this file.

This project adheres to **[Semantic
Versioning](https://semver.org/spec/v2.0.0.html)**. Version syntax is
`{major}.{minor}.{patch}`, where a field bump means:

- **Patch**: The release contains bug fixes.
- **Minor**: The release contains backward-compatible changes.
- **Major**: The release contains compatibility-breaking changes.

**Remember:** Both micro and minor releases are guaranteed to respect
backward-compatibility and can be updated to without risk of breakage. For major
releases, please check this changelog before upgrading.

## 2.11.0 - 2021-09-17

### Changed

- Data: Update aliases.
- Meta: Upgrade [stellar-sdk] to 8.x.
- Meta: Update dependencies.

## 2.10.0 - 2021-01-08

### Changed

- Data: Update aliases.
- Meta: Upgrade [stellar-skd] to 7.x.

## 2.9.0 - 2020-11-08

### Changed

- Data: Update aliases.
- Meta: Upgrade [stellar-sdk] to 6.x.

## 2.8.1 - 2020-09-12

### Changed

- Data: Update aliases.

## 2.8.0 - 2020-06-14

### Changed

- Meta: Switch to @kisbox/helpers.

## 2.7.0 - 2020-05-24

### Changed

- Logic: Upgrade [stellar-sdk] to 5.x.

## 2.6.1 - 2020-05-04

### Changed

- Data: Update aliases.

## 2.6.0 - 2020-04-11

### Changed

- Data: Update aliases.
- Logic: Update [stellar-sdk] to 4.1.0.

## 2.5.2 - 2019-12-07

### Changed

- Data: Trezor Wallet is not beta anymore.

## 2.5.1 - 2019-11-27

### Fixed

- Data: Fix Sep-0007 wallet URL.

## 2.5.0 - 2019-11-27

### Added

- UI: Add wallets: `Lobstr Web`, `StellarTerm`.

## 2.4.0 - 2019-10-26

### Changed

- Logic: Update [stellar-sdk] to 3.1.2. (protocol 12 support)

### Fixed

- Meta: Fix `npm run clean`.

## 2.3.1 - 2019-10-05

### Changed

- Data: Update aliases.

## 2.3.0 - 2019-09-28

### Added

- Data: Add Trezor Wallet.

## 2.2.0 - 2019-09-07

### Added

- Documentation: Publish CONTRIBUTING.md.

### Changed

- Protocol: SEP-0007 wallets now need a source. Sourceless XDR links have been
  removed from SEP-0007 specifications.

## 2.1.0 - 2019-08-31

### Added

- Documentation: add navigation header.

### Changed

- Meta: upgrade stellar-sdk to 3.x.
- Documentation: update contributing guidelines.

## 2.0.5 - 2019-07-26

### Changed

- Automate release procedure.
- Add contributing guidelines.
- Update [stellar-sdk] to 2.1.1. (bugfixes)

## 2.0.4 - 2019-07-19

### Changed

- Update [stellar-sdk] to 2.0.1.
- Update known public key aliases.

## 2.0.3 - 2019-06-18

### Changed

- Update [stellar-sdk] to 1.0.3.

## 2.0.2 - 2019-06-07

### Changed

- Update [stellar-sdk] to 1.0.2.
- Update known public key aliases.

## 2.0.1 - 2019-05-17

### Changed

- Update known public keys aliases.

## 2.0.0 - 2019-04-26

### Breaking

- Move code to `./src`.

### Added

- Bundle transpiled ES5 code within the package.

## 1.3.6 - 2019-04-12

### Changed

- Update [stellar-sdk] to 0.15.0.

## 1.3.5 - 2019-02-27

### Changed

- Update [stellar-sdk] to 0.14.0.

## 1.3.4 - 2019-02-14

### Added

- wallet.js: Add 'target' property.

## 1.3.3 - 2019-02-06

### Changed

- Update [stellar-sdk] to 0.13.0.

## 1.3.2 - 2019-02-01

### Changed

- Update [stellar-sdk] to 0.12.0.

## 1.3.1 - 2019-01-18

### Changed

- Update aliases.js.

## 1.3.0 - 2018-12-16

### Added

- New module: aliases.js.

## Older Releases

There is no changelog for older releases. Please take a look at the [commit
history](https://github.com/cosmic-plus/js-base/commits/master).

[stellar-sdk]: https://github.com/stellar/js-stellar-sdk
