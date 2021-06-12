<template>
  <div id="main-page">
    <header id="top" class="bg-gray-700" x-data="{ isOpen: false }">
      <nav
        class="
          container
          px-6
          py-4
          mx-auto
          md:flex
          md:justify-between
          md:items-center
        "
      >
        <div class="flex items-center justify-between">
          <a
            class="
              text-xl
              font-bold
              text-white
              transition-colors
              duration-300
              transform
              md:text-2xl
              hover:text-indigo-400
            "
            href="#"
            >ロケットリーグ 日本コミュニティ</a
          >

          <!-- Mobile menu button -->
          <div @click="isOpen = !isOpen" class="flex md:hidden">
            <button
              type="button"
              class="
                text-gray-200
                hover:text-gray-400
                focus:outline-none
                focus:text-gray-400
              "
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div
          :class="isOpen ? 'flex' : 'hidden'"
          class="
            flex-col
            mt-2
            space-y-4
            md:flex
            md:space-y-0
            md:flex-row
            md:items-center
            md:space-x-10
            md:mt-0
          "
        >
          <a
            class="
              text-sm
              font-medium
              text-gray-200
              transition-colors
              duration-300
              transform
              hover:text-indigo-400
            "
            href="#top"
            >TOP</a
          >
          <a
            class="
              text-sm
              font-medium
              text-gray-200
              transition-colors
              duration-300
              transform
              hover:text-indigo-400
            "
            href="#overview"
            >概要</a
          >
          <a
            class="
              text-sm
              font-medium
              text-gray-200
              transition-colors
              duration-300
              transform
              hover:text-indigo-400
            "
            href="#teams"
            >チーム一覧</a
          >
          <a
            class="
              px-4
              py-1
              text-sm
              font-medium
              text-center text-gray-200
              transition-colors
              duration-300
              transform
              border
              rounded
              hover:bg-indigo-400
            "
            href="https://rl-japan.com"
            >ロケットリーグ 日本コミュニティに戻る</a
          >
        </div>
      </nav>

      <section class="flex items-center justify-center" style="height: 500px">
        <div class="text-center">
          <p class="text-xl font-medium tracking-wider text-gray-300">
            ロケットリーグ 日本コミュニティ
          </p>
          <h2 class="mt-6 text-3xl font-bold text-white md:text-5xl">
            Intel World Open<br />
            Tokyo 特集
          </h2>

          <div class="flex justify-center mt-8">
            <a
              class="
                px-8
                py-2
                text-lg
                font-medium
                text-white
                transition-colors
                duration-300
                transform
                bg-red-500
                rounded
                hover:bg-red-400
              "
              href="#teams"
              >チーム一覧を見る</a
            >
          </div>
        </div>
      </section>
    </header>

    <section id="overview" class="bg-white">
      <div
        class="
          max-w-5xl
          px-6
          py-16
          mx-auto
          space-y-8
          md:flex
          md:items-center
          md:space-y-0
        "
      >
        <div class="md:w-2/3">
          <div class="hidden md:flex md:items-center md:space-x-10">
            <img
              class="object-cover object-center rounded-md shadow w-72 h-72"
              src="~/static/images/rl-4.jpg"
            />
            <img
              class="object-cover object-center w-64 rounded-md shadow h-96"
              src="~/static/images/rl-1.jpg"
            />
          </div>
          <h2 class="text-3xl font-semibold text-gray-800 md:mt-6">
            Intel World Open Tokyo
          </h2>
          <p class="max-w-lg mt-4 text-gray-600">
            Intel World Openでは、世界最高峰のRocket
            Leagueプレイヤーたちが一堂に会します。<br />
            その舞台は世界中にあり、各地域のトップチームは、4つの地域決勝戦に参加し、プレイヤーは、自分の国の誇りと総額25万ドル(約2733万円)の賞金を獲得するために戦います。<br />
            【大会日程】<br />
            オープン予選 : 2021年6月5日 17:00～<br />
            オープン予選 2 : 2021年6月12日 17:00～<br />
            日本最終予選 : 2021年6月25日<br />
            アジア決勝 : 2021年7月11日～14日<br />
          </p>
        </div>
        <div class="md:w-1/3">
          <img
            class="object-cover object-center w-full rounded-md shadow"
            style="height: 700px"
            src="~/static/images/rl-3.jpg"
          />
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="max-w-5xl px-6 pt-16 pb-4 mx-auto">
        <div
          class="
            px-8
            py-12
            bg-gray-800
            rounded-md
            md:px-20
            md:flex
            md:items-center
            md:justify-between
          "
        >
          <div>
            <h3 class="text-2xl font-semibold text-white">
              {{
                Object.keys(fillteredTeams).length
              }}チームから出場チームを絞り込む
            </h3>
            <p class="max-w-md mt-4 text-gray-400"></p>
            <label class="inline-flex items-center mt-3">
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 text-blue-600"
                v-model="q1c"
              />
              <span class="ml-2 text-gray-400"> Qualifier #1 出場チーム </span>
            </label>

            <label class="inline-flex items-center mt-3">
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 text-indigo-600"
                v-model="q2c"
              />
              <span class="ml-2 text-gray-400"> Qualifier #2 出場チーム </span>
            </label>
          </div>
          <div>
            <input
              type="search"
              class="bg-purple-white shadow rounded border-0 mt-4 p-3"
              placeholder="名前から探す"
              v-model="search"
            />
            <button
              class="
                py-3
                px-4
                text-center text-white
                transition-colors
                duration-300
                transform
                bg-gray-600
                rounded
                md:mt-0
                hover:bg-gray-500
              "
              @click="search = ''"
            >
              ×
            </button>
          </div>
        </div>
      </div>
    </section>
    <section
      v-if="fillteredTeams.length == 0"
      class="max-w-5xl px-6 py-16 mx-auto text-center"
    >
      <h2 class="text-3xl font-semibold text-gray-400">
        出場チームが見つかりません :(
      </h2>
    </section>
    <!-- <section v-else>
      <div class="max-w-5xl mx-auto px-6 text-center flex justify-end">
        <div class="relative inline-flex">
          <svg
            class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 412 232"
          >
            <path
              d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
              fill="#648299"
              fill-rule="nonzero"
            />
          </svg>
          <select
            class="
              border border-gray-300
              rounded-full
              text-gray-600
              h-10
              pl-5
              pr-10
              bg-white
              hover:border-gray-400
              focus:outline-none
              appearance-none
            "
            v-model="selected"
          >
            <option v-for="ft in fillteredTeams" :key="`selft-${ft.name}`">
              {{ ft.name }}
            </option>
          </select>
        </div>
        <button
          class="
            mx-2
            px-4
            text-center text-white
            transition-colors
            duration-300
            transform
            bg-gray-600
            rounded
            md:mt-0
            hover:bg-gray-500
          "
          @click="selected = ''"
        >
          ×
        </button>
      </div>
    </section> -->
    <section
      class="bg-white"
      id="teams"
      v-for="item in fillteredTeams"
      :key="item.team"
    >
      <div class="max-w-5xl px-6 py-16 mx-auto text-center">
        <h2 class="text-3xl font-semibold text-gray-800">{{ item.name }}</h2>
        <p class="max-w-lg mx-auto mt-4 text-gray-600">
          {{ item.description }}
        </p>
        <span
          v-if="item.q1"
          class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs"
        >
          Qualifier #1 出場チーム
        </span>
        &nbsp;
        <span
          v-if="item.q2"
          class="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs"
        >
          Qualifier #2 出場チーム
        </span>

        <div class="mt-6 flex flex-wrap justify-center">
          <div
            v-for="member in item.members"
            :key="member.name"
            class="m-4 w-48 flex flex-wrap justify-center cursor-pointer"
            @click="
              openModal(
                item.name,
                item.root,
                member.name,
                member.twitter,
                member.filename
              )
            "
          >
            <img
              v-if="member.filename != ''"
              class="object-contain object-center rounded-md shadow"
              :src="userIcon(item.name, item.root, member.filename)"
            />
            <div>
              <h3 class="mt-2 font-medium text-gray-700">{{ member.name }}</h3>
              <p class="text-sm text-gray-600">詳しく見る</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Modal v-if="modalFlag" @close-modal="closeModal">
      <div class="grid gap-8 mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div v-if="modalData.filename != ''">
          <img
            class="object-contain object-center rounded-md shadow w-full"
            :src="
              userIcon(
                modalData.teamName,
                modalData.rootName,
                modalData.filename
              )
            "
          />
        </div>
        <div>
          <p>チーム</p>
          <div class="p-4 text-2xl">
            {{ modalData.teamName }}
          </div>
          <p>名前</p>
          <div class="p-4 text-2xl">{{ modalData.memberName }}</div>
          <div v-if="modalData.twitter != ''">
            <p>Twitter</p>
            <div class="p-4 text-2xl">
              <a
                class="text-blue-500"
                :href="`https://twitter.com/${modalData.twitter}`"
              >
                @{{ modalData.twitter }}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button class="m-4 p-4 bg-gray-200 rounded" @click="closeModal">
          閉じる
        </button>
      </div>
    </Modal>
    <section class="bg-white">
      <div class="max-w-5xl px-6 py-16 mx-auto">
        <div
          class="
            px-8
            py-12
            bg-gray-800
            rounded-md
            md:px-20
            md:flex
            md:items-center
            md:justify-between
          "
        >
          <div>
            <h3 class="text-2xl font-semibold text-white">
              ロケットリーグ 日本コミュニティ
            </h3>
            <p class="max-w-md mt-4 text-gray-400">
              大会情報、オフラインイベントなどや、アップデート、初心者向けTipsなどなどロケットリーグについての様々な情報を発信していくコミュニティWebサイトです。
            </p>
          </div>

          <a
            class="
              block
              px-8
              py-2
              mt-6
              text-lg
              font-medium
              text-center text-white
              transition-colors
              duration-300
              transform
              bg-indigo-600
              rounded
              md:mt-0
              hover:bg-indigo-500
            "
            href="https://rl-japan.com/?utm_source=site&utm_medium=banner&utm_campaign=get_information"
            >詳しく見る</a
          >
        </div>
      </div>
    </section>
    <footer class="border-t mt-8">
      <div
        class="container flex items-center justify-between px-6 py-8 mx-auto"
      >
        <p class="text-gray-500">
          © 2021 ロケットリーグ 日本コミュニティ All Rights Reserved.
        </p>
      </div>
    </footer>
  </div>
</template>
<script>
import Modal from '~/components/Modal'
export default {
  components: { Modal },
  data() {
    return {
      modalFlag: false,
      isOpen: false,
      q1c: false,
      q2c: true,
      search: '',
      selected: '',
      modalData: {
        teamName: '',
        rootName: '',
        memberName: '',
        twitter: '',
        filename: '',
      },
      teams: [
        {
          name: 'BLAST',
          description: '#BSTWIN',
          root: 'BST',
          q1: true,
          q2: true,
          members: [
            { name: 'shuka(shuka)', twitter: 'shuka_rl', filename: 'shuka' },
            {
              name: 'amatel(amatel)',
              twitter: 'amatelll',
              filename: 'amatel',
            },
            { name: 'ma2ris(ma2ris)', twitter: 'ma2ris', filename: 'ma2ris' },
            {
              name: 'ONRUSH(Onrush,Mao)',
              twitter: 'mon738',
              filename: 'mao',
            },
          ],
        },
        {
          name: 'Bloom',
          description: '',
          root: 'Bloom',
          q1: true,
          q2: false,
          members: [
            { name: 'mido(mido)', twitter: 'mido_rl', filename: 'mido' },
            { name: 'YMTO(YMTO)', twitter: 'Yamaimo_YMTO', filename: 'YMTO' },
            { name: 'zou(zou)', twitter: 'mon738', filename: 'zou' },
          ],
        },
        {
          name: 'BumpyPumpy',
          description: '',
          root: 'BP',
          q1: true,
          q2: false,
          members: [
            { name: 'OLPiX(OLPiX)', twitter: 'OlpixRL', filename: 'olpix' },
            {
              name: 'shaolon(shaolon)',
              twitter: 'khmnt1995',
              filename: 'shaolon',
            },
            { name: 'BurnRL_(Burn)', twitter: 'BurnRL', filename: 'burn' },
          ],
        },
        {
          name: 'C.Companion',
          description: '',
          root: 'CC',
          q1: true,
          q2: true,
          members: [
            {
              name: 'tananatu(たななつ)',
              twitter: 'tananatuv',
              filename: 'tananatu',
            },
            {
              name: 'Akiphic(Akiphic)',
              twitter: 'Akiphic',
              filename: 'akiphic',
            },
            {
              name: 'kuma2ki(くまつき)',
              twitter: 'kuma2ki',
              filename: 'kumatuki',
            },
          ],
        },
        {
          name: 'CVent',
          description: '',
          root: 'CVent',
          q1: true,
          q2: true,
          members: [
            {
              name: 'waiwai(わいわい)',
              twitter: 'tugumegu0214',
              filename: 'わいわい',
            },
            {
              name: 'temma(てんま)',
              twitter: '',
              filename: 'てんま',
            },
            {
              name: 'SUGAVUKI(ぶっきー)',
              twitter: '',
              filename: 'ぶっきー',
            },
          ],
        },
        {
          name: 'Death phoenix',
          description: '',
          root: '',
          q1: true,
          q2: false,
          members: [
            {
              name: 'Matechin',
              twitter: '',
              filename: '',
            },
            {
              name: 'BUHIKIN',
              twitter: '',
              filename: '',
            },
            {
              name: 'cherico',
              twitter: '',
              filename: '',
            },
          ],
        },
        {
          name: 'Diamond Dust',
          description: '',
          root: '',
          q1: true,
          q2: true,
          members: [
            {
              name: 'Ren',
              twitter: '',
              filename: '',
            },
            {
              name: 'KEI',
              twitter: '',
              filename: '',
            },
            {
              name: 'DOMI',
              twitter: '',
              filename: '',
            },
          ],
        },
        {
          name: 'Doggo',
          description: '',
          root: 'Doggo',
          q1: true,
          q2: true,
          members: [
            {
              name: 'mikan(mikan)',
              twitter: 'mikanRL_',
              filename: 'mikan',
            },
            {
              name: 'Nemoto Putti(ねもとぷっち)',
              twitter: 'nemotoputti',
              filename: 'nemotoputti',
            },
            {
              name: 'B-Lain(Battlelain)',
              twitter: '',
              filename: 'Battlelain',
            },
          ],
        },
        {
          name: 'Flower Fighters',
          description: '',
          root: '',
          q1: true,
          q2: false,
          members: [
            {
              name: 'loxee',
              twitter: '',
              filename: '',
            },
            {
              name: 'yori_xmma',
              twitter: '',
              filename: '',
            },
            {
              name: 'medo',
              twitter: '',
              filename: '',
            },
          ],
        },
        {
          name: 'GracesBlaze',
          description: '',
          root: 'GB',
          q1: true,
          q2: true,
          members: [
            {
              name: 'UtsuhoRin(空凛(うつほ りん))',
              twitter: '',
              filename: 'utuhorin',
            },
            {
              name: 'RNE.(RNE.)',
              twitter: '',
              filename: 'rne',
            },
            {
              name: 'Urayasu(うらやす)',
              twitter: '',
              filename: 'urayasu',
            },
            {
              name: 'Ron.',
              twitter: '',
              filename: '',
            },
          ],
        },
        {
          name: 'Gutan Gaming α',
          description: '',
          root: 'Gutan',
          q1: true,
          q2: true,
          members: [
            {
              name: 'EclaiL(EclaiL)',
              twitter: 'EclaiL_RL',
              filename: 'eclaiL',
            },
            {
              name: 'slpp(slct)',
              twitter: 'select_rl',
              filename: 'slct',
            },
            {
              name: 'Krilin(Krilin)',
              twitter: 'KrilinRL',
              filename: 'krilin',
            },
          ],
        },
        {
          name: 'HAZE',
          description: '',
          root: '',
          q1: false,
          q2: true,
          members: [
            {
              name: 'ra0045vr',
              twitter: '',
              filename: '',
            },
            {
              name: 'Birb',
              twitter: '',
              filename: '',
            },
            {
              name: 'eco',
              twitter: '',
              filename: '',
            },
          ],
        },
        {
          name: 'Irithyll',
          description: '',
          root: 'Iritny',
          q1: true,
          q2: true,
          members: [
            {
              name: 'lahire(らは)',
              twitter: '',
              filename: 'lahire',
            },
            {
              name: 'tetu(tetu)',
              twitter: 'nekoteturl',
              filename: 'tetu',
            },
            {
              name: 'assault',
              twitter: '',
              filename: '',
            },
          ],
        },
        {
          name: 'Jumble',
          description: '',
          root: '',
          q1: true,
          q2: true,
          members: [
            {
              name: 'Hiro',
              twitter: '',
              filename: '',
            },
            {
              name: 'HERMES(えるめす)',
              twitter: '',
              filename: '',
            },
            {
              name: 'Onabe no Huta(Onabe no Huta)',
              twitter: '',
              filename: '',
            },
          ],
        },
        {
          name: 'LeftFront Gaming',
          description: '',
          root: 'LFG',
          q1: true,
          q2: true,
          members: [
            {
              name: 'great_nobuo(Great_Nobuo)',
              twitter: '',
              filename: 'nobuo',
            },
            {
              name: 'kashu72(カシューナッツ)',
              twitter: '',
              filename: 'kasyu',
            },
            {
              name: 'Taiyaki24006(taiyaki)',
              twitter: '',
              filename: 'taiyaki',
            },
            {
              name: 'kei-chan31(慶ちゃん)',
              twitter: '',
              filename: 'keichan',
            },
          ],
        },
        {
          name: 'mgh',
          description: '',
          root: '',
          q1: false,
          q2: true,
          members: [
            {
              name: 'TTV_FLASH810_JP',
              twitter: '',
              filename: '',
            },
            {
              name: 'CURAGE777',
              twitter: '',
              filename: '',
            },
            {
              name: 'Ajisai3',
              twitter: '',
              filename: '',
            },
          ],
        },
        {
          name: 'NOR',
          description: '',
          root: 'NOR',
          q1: true,
          q2: true,
          members: [
            {
              name: 'Ryzow(Ryzow)',
              twitter: 'Ryzow',
              filename: 'ryzow',
            },
            {
              name: 'NiKo(Niko)',
              twitter: 'niko__211',
              filename: 'Niko',
            },
            {
              name: 'Haru(Haru)',
              twitter: '',
              filename: 'haru',
            },
          ],
        },
        {
          name: 'NRLG Cats',
          description: '',
          root: 'NRLGC',
          q1: true,
          q2: true,
          members: [
            {
              name: 'Arinko(ありんこ)',
              twitter: 'Arinko_RL',
              filename: 'arinko',
            },
            {
              name: 'sk(sk)',
              twitter: '',
              filename: 'sk',
            },
            {
              name: 'motikun.(motikun.)',
              twitter: 'motikun_RL',
              filename: 'motikun',
            },
          ],
        },
        {
          name: 'NRLG Cows',
          description: '',
          root: '',
          q1: true,
          q2: true,
          members: [
            {
              name: 'ken_nekotami',
              twitter: '',
              filename: '',
            },
            {
              name: 'tenpuraaaa',
              twitter: '',
              filename: '',
            },
            {
              name: 'aviyon',
              twitter: '',
              filename: '',
            },
            {
              name: 'ricardo',
              twitter: '',
              filename: '',
            },
          ],
        },
        {
          name: 'Ricochet',
          description: '',
          root: '',
          q1: false,
          q2: true,
          members: [
            {
              name: 'KOMeNO',
              twitter: '',
              filename: '',
            },
            {
              name: 'Cliche70',
              twitter: '',
              filename: '',
            },
            {
              name: 'RIN',
              twitter: '',
              filename: '',
            },
          ],
        },
        {
          name: 'NucoEsports',
          description: '',
          root: 'NucoE',
          q1: true,
          q2: false,
          members: [
            {
              name: 'Nuco(Nuco)',
              twitter: '',
              filename: 'nuco',
            },
            {
              name: 'itochan1213_Twitch(いとちゃん)',
              twitter: 'itoa1213',
              filename: 'ito',
            },
            {
              name: 'Reg(葉月れぐ)',
              twitter: 'Reg_games',
              filename: 'reg',
            },
          ],
        },
        {
          name: 'Shotgun Mystery Team',
          description: '',
          root: '',
          q1: false,
          q2: true,
          members: [
            {
              name: 'Doomsee',
              twitter: '',
              filename: '',
            },
            {
              name: 'goon303rt',
              twitter: '',
              filename: '',
            },
            {
              name: 'Fyshokid',
              twitter: '',
              filename: '',
            },
          ],
        },
        {
          name: 'Sylphide',
          description: '',
          root: 'Sylphide',
          q1: true,
          q2: true,
          members: [
            {
              name: 'pikanya(pikanya)',
              twitter: 'pikanya1029',
              filename: 'pikanya',
            },
            {
              name: 'Ayun(Ayun)',
              twitter: '',
              filename: 'Ayun',
            },
            {
              name: 'defiant(defiant)',
              twitter: 'defiantpesky',
              filename: 'defiant',
            },
          ],
        },
        {
          name: 'Team GDS',
          description: '#がんだーずwin',
          root: 'GDS',
          q1: true,
          q2: true,
          members: [
            {
              name: 'Retra(れとら)',
              twitter: '@Retra_',
              filename: 'retra',
            },
            {
              name: 'pottechis(ぽてち)',
              twitter: '',
              filename: 'poteti',
            },
            {
              name: 'niko2kanta',
              twitter: 'niko2kanta',
              filename: 'niko2',
            },
            {
              name: 'Alexandre',
              twitter: '',
              filename: '',
            },
          ],
        },
        {
          name: 'Team Hatomit',
          description: '',
          root: '',
          q1: true,
          q2: true,
          members: [
            {
              name: 'MitJUSTICE',
              twitter: '',
              filename: '',
            },
            {
              name: 'Max Verstappen',
              twitter: '',
              filename: '',
            },
            {
              name: 'thirty 2',
              twitter: '',
              filename: '',
            },
          ],
        },
        {
          name: 'Tokyo Verdy',
          description: '',
          root: '',
          q1: true,
          q2: false,
          members: [
            {
              name: 'ReaLizeRL',
              twitter: '',
              filename: '',
            },
            {
              name: 'Maru',
              twitter: '',
              filename: '',
            },
            {
              name: 'Tenhow',
              twitter: '',
              filename: '',
            },
          ],
        },
        {
          name: 'val',
          description: '',
          root: '',
          q1: true,
          q2: false,
          members: [
            {
              name: 'n4sh',
              twitter: '',
              filename: '',
            },
            {
              name: 'zalez_41',
              twitter: '',
              filename: '',
            },
            {
              name: 'tanukin',
              twitter: '',
              filename: '',
            },
          ],
        },
        {
          name: 'wakatteru47',
          description: '',
          root: 'wakatteru',
          q1: true,
          q2: true,
          members: [
            { name: 'shina_vt(47)', twitter: '47_si_na', filename: '47' },
            {
              name: 'Teruteru833(てるてる)',
              twitter: 'teru_teru_v',
              filename: 'teruteru',
            },
            {
              name: 'viechan(わかびー)',
              twitter: 'ViechST',
              filename: 'wakavi',
            },
            {
              name: 'Khrono_Inugami(Khrono^~^)',
              twitter: '',
              filename: 'khrono',
            },
          ],
        },
        {
          name: 'Xayfhers',
          description: '#XFSWIN',
          root: 'XFS',
          q1: true,
          q2: true,
          members: [
            {
              name: 'peseta(ぺせた)',
              twitter: 'peseta999',
              filename: 'pese',
            },
            {
              name: 'Arch(Arch)',
              twitter: '_4rch',
              filename: 'arch',
            },
            {
              name: 'Lil PLASMA(Lil PLASMA)',
              twitter: 'Plazma_RL',
              filename: 'plasma',
            },
          ],
        },
        {
          name: 'Yamaha esports Boosters',
          description: '#YAMAHAWIN',
          root: 'Yamaha',
          q1: true,
          q2: false,
          members: [
            {
              name: 'CeLLiS(ちえりす)',
              twitter: '',
              filename: 'cellis',
            },
            {
              name: 'gaming_moririn(もりりん)',
              twitter: '',
              filename: 'moririn',
            },
            {
              name: 'Bernardel(ベルナルデル)',
              twitter: '',
              filename: 'bernardel',
            },
          ],
        },
        {
          name: 'youtuber仲間',
          description: '',
          root: '',
          q1: true,
          q2: false,
          members: [
            {
              name: 'yumegamitatsumi',
              twitter: '',
              filename: '',
            },
            {
              name: 'Hayate',
              twitter: '',
              filename: '',
            },
            {
              name: 'koma',
              twitter: '',
              filename: '',
            },
          ],
        },
      ],
    }
  },
  computed: {
    fillteredTeams() {
      let teams = this.teams
      const vm = this
      if (this.q1c || this.q2c) {
        teams = teams.filter((item) => {
          return item.q1 == vm.q1c || item.q2 == vm.q2c
        })
        if (this.selected) {
          teams = teams.filter((item) => {
            return item.name == this.selected
          })
        } else {
          if (this.search)
            teams = teams.filter((item) => {
              return (
                item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
              )
            })
        }

        return teams
      } else {
        return []
      }
    },
  },
  mounted() {},
  methods: {
    userIcon: function (teamName, rootName, memberName) {
      // console.log(`~/static/teams/${teamName}/${rootName}_${memberName}.jpg`)
      return require(`~/static/teams/${teamName}/${rootName}_${memberName}.jpg`)
    },
    openModal(teamName, rootName, memberName, memberTwitter, filename) {
      this.modalData.teamName = teamName
      this.modalData.rootName = rootName
      this.modalData.memberName = memberName
      this.modalData.twitter = memberTwitter
      this.modalData.filename = filename
      this.modalFlag = true
    },
    closeModal() {
      this.modalFlag = false
    },
  },
}
</script>
<style scoped>
header {
  /* background: rgba(0, 0, 0, 0.5);
  background-image: url('~/static/read.jpg');
  background-size: cover;  */
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),
    url('~/static/read.jpg');
}
</style>
